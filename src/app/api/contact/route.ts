import siteConfig from '@site-config';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 10_000;
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  company: 160,
  country: 100,
  product: 120,
  message: 3_000,
};

type ContactFields = keyof typeof MAX_LENGTHS;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char] ?? char);

const json = (body: { success: boolean; error?: string }, status = 200) =>
  Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

async function readBodyWithinLimit(request: Request): Promise<string | null> {
  if (!request.body) return '';

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  try {
    if (!origin || new URL(origin).origin !== new URL(request.url).origin) {
      return json({ success: false, error: 'Invalid request.' }, 403);
    }
  } catch {
    return json({ success: false, error: 'Invalid request.' }, 403);
  }

  const contentType = request.headers.get('content-type') || '';
  if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
    return json({ success: false, error: 'Invalid form submission.' }, 415);
  }

  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader && !/^\d+$/.test(contentLengthHeader)) {
    return json({ success: false, error: 'Invalid form submission.' }, 400);
  }
  const contentLength = Number(contentLengthHeader || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ success: false, error: 'The request is too large.' }, 413);
  }

  let body: unknown;
  try {
    const rawBody = await readBodyWithinLimit(request);
    if (rawBody === null) {
      return json({ success: false, error: 'The request is too large.' }, 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return json({ success: false, error: 'Invalid form submission.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ success: false, error: 'Invalid form submission.' }, 400);
  }

  const submitted = body as Record<string, unknown>;
  // Quietly accept bot submissions that fill the visually hidden field.
  if (
    (typeof submitted._contact_check === 'string' && submitted._contact_check.trim()) ||
    (typeof submitted.website === 'string' && submitted.website.trim())
  ) {
    return json({ success: true });
  }

  const values = {} as Record<ContactFields, string>;
  for (const field of Object.keys(MAX_LENGTHS) as ContactFields[]) {
    const value = submitted[field];
    if (typeof value !== 'string') {
      if (field === 'name' || field === 'email') {
        return json({ success: false, error: 'Please provide your name and a valid email address.' }, 400);
      }
      values[field] = '';
      continue;
    }

    const normalized = value.trim();
    if (normalized.length > MAX_LENGTHS[field]) {
      return json({ success: false, error: 'One or more fields are too long.' }, 400);
    }
    values[field] = normalized;
  }

  if (values.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return json({ success: false, error: 'Please provide your name and a valid email address.' }, 400);
  }
  if (values.country && !siteConfig.contactCountries.includes(values.country)) {
    return json({ success: false, error: 'Please select a valid country.' }, 400);
  }
  if (values.product && !siteConfig.contactProducts.includes(values.product)) {
    return json({ success: false, error: 'Please select a valid product.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFY_EMAIL;
  const sender = process.env.FROM_EMAIL;
  if (!apiKey || apiKey === 're_replace_with_your_resend_api_key' || !recipient || !sender) {
    console.error('Contact form is missing valid Resend environment configuration.');
    return json({ success: false, error: 'The contact form is temporarily unavailable. Please email us directly.' }, 503);
  }

  const details = [
    ['Name', values.name],
    ['Email', values.email],
    ['Company', values.company || 'Not provided'],
    ['Country', values.country || 'Not provided'],
    ['Product interest', values.product || 'Not specified'],
    ['Message', values.message || 'No message provided'],
  ] as const;
  const subjectProduct = values.product || 'General';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: values.email,
      subject: `[${siteConfig.companyName}] Inquiry: ${subjectProduct.replace(/[\r\n]+/g, ' ')} from ${values.name.replace(/[\r\n]+/g, ' ')}`,
      text: details.map(([label, value]) => `${label}:\n${value}`).join('\n\n'),
      html: `<h2>New inquiry for ${escapeHtml(siteConfig.companyName)}</h2>${details
        .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`)
        .join('')}`,
    }, { signal: AbortSignal.timeout(8_000) });

    if (error) {
      console.error(`Resend rejected contact email: ${error.name}.`);
      return json({ success: false, error: 'We could not send your inquiry. Please try again or email us directly.' }, 502);
    }

    return json({ success: true });
  } catch {
    console.error('Contact email delivery failed.');
    return json({ success: false, error: 'We could not send your inquiry. Please try again or email us directly.' }, 502);
  }
}

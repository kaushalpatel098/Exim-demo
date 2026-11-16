// Contact form API route
// NOTE: This route is NOT deployed. `output: 'export'` in next.config.js means the build
// emits a static site and this handler is excluded from `out/`.
// It is kept as a starting point for the planned Netlify + Resend integration.
// On Netlify with a static export, reimplement this as a Netlify Function (netlify/functions),
// or remove `output: 'export'` and deploy with a Node runtime. The live form currently posts
// directly to Web3Forms from the client (see src/components/ContactForm.tsx).

import siteConfig from '@site-config';

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: unknown) =>
  String(value ?? '').replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);

export async function POST(request: Request) {
  const body = await request.json();

  // TODO: Replace with actual Resend API call when API key is provided
  const RESEND_API_KEY = process.env.RESEND_API_KEY || 'YOUR_RESEND_API_KEY';
  const TO_EMAIL = process.env.NOTIFY_EMAIL || siteConfig.emails.exports;
  const FROM_EMAIL = process.env.FROM_EMAIL || `website@${new URL(siteConfig.domain).hostname}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `[${siteConfig.companyName}] New Inquiry: ${body.product || 'General'} from ${body.name}`,
        html: `
          <h2>New Export Inquiry — ${siteConfig.companyName}</h2>
          <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(body.company || 'Not provided')}</p>
          <p><strong>Country:</strong> ${escapeHtml(body.country || 'Not provided')}</p>
          <p><strong>Product Interest:</strong> ${escapeHtml(body.product || 'Not specified')}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(body.message || 'No message')}</p>
        `,
      }),
    });

    if (!res.ok) throw new Error('Email send failed');
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}

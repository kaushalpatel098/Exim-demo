'use client';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail } from 'lucide-react';
import siteConfig from '@site-config';

const countries = siteConfig.contactCountries;
const products = siteConfig.contactProducts;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', product: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    const website = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value ?? '';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, website }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setStatus('sent');
        setForm({ name: '', email: '', company: '', country: '', product: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(typeof data?.error === 'string' ? data.error : 'Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Please check your connection and try again, or email us directly.');
    }
  };

  const inputClass = 'w-full px-4 py-3.5 rounded-xl border border-brand-200 bg-white focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 outline-none transition-all duration-200 text-sm text-brand-800 placeholder:text-brand-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required placeholder="Full Name *" className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email Address *" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Company Name" className={inputClass} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <select className={inputClass} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}>
          <option value="">Select Country</option>
          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <select className={inputClass} value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
        <option value="">Product of Interest</option>
        {products.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>
      <textarea rows={4} placeholder="Tell us about your requirements — products, quantities, destination, and preferred terms..." className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

      {status === 'sent' ? (
        <div className="flex items-center gap-3 bg-accent-50 text-accent-800 p-4 rounded-xl border border-accent-200">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-accent-600" />
          <div>
            <span className="text-sm font-medium block">Inquiry sent successfully!</span>
            <span className="text-xs text-accent-600">We will review your inquiry and reply within 24 hours.</span>
          </div>
        </div>
      ) : (
        <button type="submit" disabled={status === 'sending'} className="w-full flex items-center justify-center gap-2 bg-brand-900 text-white font-semibold py-3.5 rounded-xl hover:bg-brand-800 hover:shadow-elevated transition-all duration-300 disabled:opacity-60">
          {status === 'sending' ? (<><Loader2 className="w-4 h-4 animate-spin" />Sending...</>) : (<><Send className="w-4 h-4" />Send Inquiry</>)}
        </button>
      )}
      {status === 'error' && (
        <div role="alert" className="flex items-center gap-3 bg-rose-50 text-rose-600 p-4 rounded-xl border border-rose-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{errorMessage} Please email us directly at {siteConfig.emails.exports}</span>
        </div>
      )}
      <div className="flex items-center gap-2 text-xs text-brand-400 pt-1">
        <Mail className="w-3.5 h-3.5" />
        <span>Or email us directly at <a href={`mailto:${siteConfig.emails.exports}`} className="text-accent-600 hover:underline">{siteConfig.emails.exports}</a></span>
      </div>
    </form>
  );
}

import type { Metadata } from 'next';
import siteConfig from '@site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.companyName} collects, uses, and protects the information you share through this website.`,
  alternates: { canonical: '/privacy' },
};

const sections = [
  {
    heading: 'Information we collect',
    paragraphs: [
      'When you submit the contact form, we collect the details you provide: name, email address, company name, country, product interest, and your message.',
      'Our hosting provider may automatically record standard technical information such as IP address, browser type, and requested pages for security and reliability purposes.',
      'If website analytics are enabled, we use Google Analytics 4 to collect aggregated usage data such as pages visited, approximate location, and device type.',
    ],
  },
  {
    heading: 'How we use your information',
    paragraphs: [
      'We use your contact details to respond to your inquiry, prepare quotations, and follow up on potential orders.',
      'Technical and analytics data help us keep the site secure, diagnose problems, and understand which content is useful to visitors.',
      'We do not sell your personal information.',
    ],
  },
  {
    heading: 'Third-party processors',
    paragraphs: [
      'Contact form submissions are delivered through Web3Forms, which processes the form data on our behalf and forwards it to our business email.',
      'If analytics are enabled, Google Analytics processes usage data under Google\'s terms. Our hosting provider processes technical logs for the site.',
      'These providers may process data outside your country, including in the United States.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'The site does not require cookies to function. Analytics cookies are set only if analytics are enabled and may be used to distinguish returning visitors.',
      'You can block or delete cookies in your browser settings without losing access to the site content.',
    ],
  },
  {
    heading: 'Retention',
    paragraphs: [
      'We keep inquiry correspondence for as long as needed to handle your request, maintain business records, and meet legal or accounting obligations.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'You may request access to, correction of, or deletion of the personal information you have shared with us, and you may object to our use of it for direct marketing.',
      `To exercise these rights, contact us at ${siteConfig.emails.general}. We will respond within the timeframe required by applicable law.`,
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this policy to reflect changes in our practices or legal requirements. The latest version is always published on this page.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `Questions about this policy can be sent to ${siteConfig.emails.general} or ${siteConfig.emails.exports}. Our business address is ${siteConfig.location}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-14 bg-brand-50/50 border-b border-brand-100">
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-[0.2em]">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-900 mt-3 mb-4">Privacy Policy</h1>
          <p className="text-brand-500">Last updated November 15, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-brand-600 leading-relaxed">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-brand-900 mb-3">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import siteConfig from '@site-config';
import { getAssetPath } from '@/lib/asset-path';

interface MaintenancePageProps {
  section?: string;
}

export default function MaintenancePage({ section }: MaintenancePageProps) {
  const subject = section ? `Question about ${section}` : 'Question about your website';

  return (
    <section className="relative isolate flex min-h-[65vh] items-center overflow-hidden bg-brand-50/60 py-20 md:py-28">
      <div className="mesh-gradient absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="site-container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-white px-6 py-12 text-center shadow-elevated md:px-14 md:py-16">
          <div className="mx-auto mb-6 flex justify-center">
            <Image
              src={getAssetPath('/logo.svg')}
              alt={siteConfig.companyName}
              width={168}
              height={148}
              className="h-24 w-auto"
              unoptimized
            />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            {siteConfig.companyName}
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-900 md:text-5xl">
            We’re getting this page ready.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-600 md:text-lg">
            We’re preparing {section ? `our ${section.toLowerCase()} information` : 'more information'} for you. In the meantime, explore our products or talk with our team about what you need.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Explore products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 px-7 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:border-accent-300 hover:bg-accent-50"
            >
              Contact our team
            </Link>
          </div>

          <a
            href={`mailto:${siteConfig.emails.general}?subject=${encodeURIComponent(subject)}`}
            className="mt-8 inline-flex items-center gap-2 text-sm text-brand-500 transition-colors hover:text-accent-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.emails.general}
          </a>
        </div>
      </div>
    </section>
  );
}

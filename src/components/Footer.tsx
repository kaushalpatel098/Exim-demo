import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import siteConfig from '@site-config';
import { getAssetPath } from '@/lib/asset-path';

export default function Footer() {
  return (
    <footer>
      {/* CTA Strip */}
      <section className="relative overflow-hidden bg-brand-900">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="relative site-container py-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Source Premium Indian Products?
          </h3>
          <p className="text-brand-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized quotation within 24 hours. No spam, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-accent-400 hover:shadow-glow transition-all duration-300 group"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-brand-950 text-brand-400">
        <div className="site-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src={getAssetPath('/logo.svg')}
                alt={siteConfig.companyName}
                width={796}
                height={344}
                className="h-10 w-auto brightness-0 invert opacity-90"
                unoptimized
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your reliable sourcing partner for premium Indian products. Trusted by buyers across Africa, the Middle East, and beyond.
            </p>
            <a href={`mailto:${siteConfig.emails.general}`} className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm transition-colors">
              <Mail className="w-4 h-4" />
              {siteConfig.emails.general}
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Products</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footerProducts.map((product) => (
                <li key={product}>
                  <Link href="/products" className="hover:text-white transition-colors duration-200">{product}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TEMPORARILY HIDDEN: restore the markets footer column when market pages are live.
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Markets</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footerMarkets.map((market) => (
                <li key={market}>
                  <Link href="/markets" className="hover:text-white transition-colors duration-200">{market}</Link>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <div>
                  <a href={`mailto:${siteConfig.emails.general}`} className="hover:text-white transition-colors block">{siteConfig.emails.general}</a>
                  <a href={`mailto:${siteConfig.emails.exports}`} className="hover:text-white transition-colors block">{siteConfig.emails.exports}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phones.general.replace(/\s/g, '')}`} className="hover:text-white transition-colors block">{siteConfig.phones.general}</a>
                  <a href={`tel:${siteConfig.phones.exports.replace(/\s/g, '')}`} className="hover:text-white transition-colors block">{siteConfig.phones.exports}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>{siteConfig.locationShort}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-xs text-brand-500">
          &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          {' · '}
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

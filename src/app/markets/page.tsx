import type { Metadata } from 'next';
import CountryCard from '@/components/CountryCard';
import PageHero from '@/components/PageHero';
import FadeIn from '@/components/FadeIn';
import SectionHeader from '@/components/SectionHeader';
import { Ship, CreditCard } from 'lucide-react';
import siteConfig from '@site-config';

export const metadata: Metadata = {
  title: 'Markets We Serve',
  description: `${siteConfig.companyName} ships premium Indian products to Tanzania, Kenya, Nigeria, UAE, UK, China, and more. Flexible FOB, CIF, DDP shipping and TT, LC payment terms.`,
  alternates: { canonical: '/markets' },
};

const countries = siteConfig.markets;

const whyAfrica = [
  { stat: '54', label: 'Countries in AfCFTA', desc: 'The African Continental Free Trade Agreement is creating a single connected market' },
  { stat: '3x', label: 'Middle Class Growth', desc: 'Africa\'s middle class is projected to triple by 2030, driving demand for quality imports' },
  { stat: '#1', label: 'India-Africa Trade', desc: 'India is one of Africa\'s largest trade partners with strong supply chain links' },
  { stat: '1.4B', label: 'People by 2030', desc: 'Africa\'s young, growing population is the world\'s fastest-expanding consumer market' },
];

const incoterms = [
  { term: 'FOB', desc: 'Free on Board — we deliver to Indian port, you handle freight.' },
  { term: 'CIF', desc: 'Cost, Insurance & Freight — we handle everything to your port.' },
  { term: 'EXW', desc: 'Ex Works — you handle logistics from our factory gate.' },
  { term: 'DDP', desc: 'Delivered Duty Paid — we deliver to your door, all-inclusive.' },
];

const paymentTerms = [
  { term: 'TT Advance', desc: '100% before shipment. Standard for new relationships.' },
  { term: '30/70 TT', desc: '30% advance, 70% before shipment. Common in Africa/ME.' },
  { term: 'Letter of Credit', desc: 'Bank-guaranteed payment. Highest security for both parties.' },
  { term: 'D/P', desc: 'Documents Against Payment. For established trade partners.' },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        title="Markets We Serve"
        subtitle="We ship premium Indian products to buyers across Africa, the Middle East, Europe, and Asia. Wherever you are, we deliver."
        imageSrc="/images/heroes/markets.jpg"
        imageAlt="Global trade routes and world map"
      />

      {/* Africa Opportunity */}
      <section className="py-24 bg-brand-50/50">
        <div className="site-container">
          <SectionHeader
            eyebrow="Growing Markets"
            headline="India-Africa Trade"
            subheadline="Africa is one of the fastest-growing import markets in the world, and Indian products are in high demand across the continent."
            align="left"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6">
            {whyAfrica.map((w, i) => (
              <FadeIn key={w.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-7 border border-brand-100 card-hover">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent-600 mb-2">{w.stat}</div>
                  <div className="text-sm font-bold text-brand-900 mb-1">{w.label}</div>
                  <p className="text-xs text-brand-500 leading-relaxed">{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-24">
        <div className="site-container">
          <SectionHeader
            eyebrow="Active Markets"
            headline="Countries We Trade With"
            subheadline="We have established trade relationships and shipping routes to these markets, with more being added regularly."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
            {countries.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.07}>
                <CountryCard {...c} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Terms */}
      <section className="py-24 bg-brand-50/50">
        <div className="site-container">
          <SectionHeader
            eyebrow="Flexible Terms"
            headline="Trade Terms We Support"
            subheadline="We offer flexible shipping and payment terms to accommodate buyers across different markets and experience levels."
          />
          <div className="grid md:grid-cols-2 gap-8 xl:gap-10">
            <FadeIn direction="left">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center">
                    <Ship className="w-4 h-4 text-accent-400" />
                  </div>
                  <h3 className="font-display font-bold text-brand-900 text-lg">Incoterms</h3>
                </div>
                <div className="space-y-3">
                  {incoterms.map((t) => (
                    <div key={t.term} className="bg-white rounded-xl p-4 border border-brand-100 card-hover">
                      <span className="inline-block bg-brand-900 text-accent-400 text-[11px] font-bold px-3 py-1 rounded-full mr-2">{t.term}</span>
                      <span className="text-sm text-brand-600">{t.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-brand-900 text-lg">Payment Terms</h3>
                </div>
                <div className="space-y-3">
                  {paymentTerms.map((t) => (
                    <div key={t.term} className="bg-white rounded-xl p-4 border border-brand-100 card-hover">
                      <span className="inline-block bg-accent-50 text-accent-700 text-[11px] font-bold px-3 py-1 rounded-full mr-2">{t.term}</span>
                      <span className="text-sm text-brand-600">{t.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

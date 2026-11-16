import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import PageHero from '@/components/PageHero';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import siteConfig from '@site-config';

export const metadata: Metadata = {
  title: 'Export Products',
  description: 'Explore 11+ categories of premium Indian export products — jaggery, textiles, leather, carpets, handicrafts, spices, rice, tea, and more. Competitive pricing, quality assured.',
  alternates: { canonical: '/products' },
};

const products = siteConfig.products;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Export Products"
        subtitle="Premium Indian products sourced from verified manufacturers. Competitive pricing, quality assured, and ready to ship worldwide."
        imageSrc="/images/heroes/products.jpg"
        imageAlt="Product warehouse"
      />

      <section className="py-24">
        <div className="site-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.05}>
                <ProductCard {...p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Looking for a specific product?</h2>
            <p className="text-brand-400 mb-8 text-lg">We source from a network of verified Indian manufacturers. If you don&apos;t see what you need, reach out — we can likely source it.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold px-8 py-3.5 rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 group">
              Request Custom Sourcing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

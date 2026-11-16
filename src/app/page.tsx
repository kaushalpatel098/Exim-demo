import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import SectionHeader from '@/components/SectionHeader';
import { ChevronDown, Shield, Award, CheckCircle, FileText, Package, Truck, MessageSquare, ArrowRight, Globe, Clock, Calendar } from 'lucide-react';
import siteConfig from '@site-config';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const statIcons = [Package, Globe, Clock, Calendar];
const stats = siteConfig.stats.map((stat, index) => ({ ...stat, icon: statIcons[index] }));

const products = siteConfig.products
  .filter((product) => product.featured)
  .map((product) => ({
    name: product.shortName,
    desc: product.shortDescription,
    image: product.image,
  }));

const process = [
  { step: '01', title: 'Share Requirements', desc: 'Tell us what products you need, quantities, and target market.', icon: MessageSquare },
  { step: '02', title: 'Get Quotation', desc: 'Receive a detailed quote with pricing, MOQ, and shipping terms within 24 hours.', icon: FileText },
  { step: '03', title: 'Confirm & Ship', desc: 'Approve the order, we handle sourcing, quality checks, and shipping to your port.', icon: Truck },
];

// Icon order mirrors siteConfig.trustSignals.
const trustIcons = [Shield, Award, Award, CheckCircle, Shield, CheckCircle];
const trustSignals = siteConfig.trustSignals.map((label, index) => ({ label, icon: trustIcons[index] }));

export default function Home() {
  return (
    <>
      {/* Hero — dramatic full-bleed */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/heroes/home-hero.jpg"
          alt="International shipping port with containers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
        <div className="hero-overlay" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 site-container py-32">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full px-5 py-2.5 text-sm text-white/80 mb-8">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                {siteConfig.hero.badge}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] mb-6">
                {siteConfig.hero.headline.line1}<br />
                <span className="gradient-text">{siteConfig.hero.headline.line2}</span><br />
                <span className="text-white/60">{siteConfig.hero.headline.line3}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-brand-300 max-w-2xl mb-12 leading-relaxed">
                {siteConfig.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="group flex items-center gap-2 bg-white text-brand-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-0.5">
                  {siteConfig.hero.cta1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] text-white font-semibold px-8 py-4 rounded-full hover:bg-white/[0.15] transition-all duration-300">
                  {siteConfig.hero.cta2}
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-20 flex items-center gap-3 text-white/30 text-sm">
                <ChevronDown className="w-5 h-5 animate-bounce" />
                Scroll to explore
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats — floating glass cards */}
      <section className="relative -mt-16 z-20 pb-24">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-elevated border border-brand-100 text-center">
                  <s.icon className="w-5 h-5 text-accent-500 mx-auto mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-brand-900 tabular-nums">{s.value}</div>
                  <div className="text-xs text-brand-500 mt-1.5 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-brand-50/50">
        <div className="site-container">
          <SectionHeader
            eyebrow="What We Export"
            headline="Premium Indian Products"
            subheadline="Carefully sourced from verified Indian manufacturers. Every product meets international quality standards."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <Link href="/products" className="group relative h-56 md:h-72 rounded-2xl overflow-hidden block">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-display font-bold text-white text-lg md:text-xl">{p.name}</h3>
                    <p className="text-brand-300 text-sm mt-1">{p.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 text-brand-900 font-semibold hover:text-accent-700 transition-colors group text-sm">
              View Full Product Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-28 bg-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="Simple Process"
            headline="How We Work"
            subheadline="From inquiry to delivery, we make international trade straightforward and transparent."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.15}>
                <div className="relative bg-brand-50/60 rounded-2xl p-8 md:p-10 border border-brand-100 card-hover">
                  <span className="font-display text-[80px] font-bold text-brand-100 absolute top-4 right-6 leading-none">{p.step}</span>
                  <div className="w-14 h-14 bg-brand-900 rounded-2xl flex items-center justify-center mb-6">
                    <p.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-900 mb-3">{p.title}</h3>
                  <p className="text-brand-500 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-brand-50/50">
        <div className="site-container">
          <SectionHeader
            eyebrow="Certified & Trusted"
            headline="Why International Buyers Choose Us"
            subheadline="Building long-term partnerships through transparency, quality, and reliability."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-5">
            {trustSignals.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.07}>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-5 md:p-6 border border-brand-100 card-hover">
                  <div className="w-11 h-11 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="text-sm font-semibold text-brand-800">{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/heroes/home-cta.jpg"
          alt="Shipping containers at port"
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">
              Start Sourcing from<br /><span className="gradient-text">India Today</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-brand-300 mb-10 text-lg max-w-2xl mx-auto">Get a customized quotation within 24 hours. No spam, no pressure — just genuine trade.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold px-10 py-4 rounded-full hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300 group">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

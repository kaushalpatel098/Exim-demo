import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/lib/asset-path';

interface ProductCardProps {
  name: string;
  image: string;
}

export default function ProductCard({ name, image }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_12px_36px_rgba(21,48,84,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-[0_24px_52px_rgba(21,48,84,0.14)]">
      {/*
        Previous product card markup, retained as requested:
        <div className="relative h-48 overflow-hidden">
          <Image src={getAssetPath(image)} alt={name} fill className="object-cover" unoptimized />
        </div>
        <div className="p-6">
          <h3>{name}</h3>
          <p>Specification: {specification}</p>
          <p>{description}</p>
          <div className="grid grid-cols-3">
            <div>Form: {productForm}</div>
            <div>MOQ: {moq}</div>
            <div>Pkg: {packaging}</div>
          </div>
          <Link href="/contact">Request Quote</Link>
        </div>
      */}

      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <Image
          src={getAssetPath(image)}
          alt={name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          unoptimized
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-white/10 opacity-70" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-5 min-h-14 line-clamp-2 font-display text-lg font-bold leading-7 text-brand-900 sm:text-xl">
          {name}
        </h3>
        <Link
          href="/contact"
          aria-label={`Request a quote for ${name}`}
          className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-700 focus-visible:outline-offset-4 group/button"
        >
          Get a Quote
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

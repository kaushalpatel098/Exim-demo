import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  hsCode: string;
  indiaRank: string;
  description: string;
  moq: string;
  packaging: string;
  image: string;
}

export default function ProductCard({ name, hsCode, indiaRank, description, moq, packaging, image }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-100 overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent h-20" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-brand-900 mb-1">{name}</h3>
        <p className="text-xs text-brand-400 mb-3">HS Code: {hsCode}</p>
        <p className="text-sm text-brand-600 mb-5 flex-1 leading-relaxed">{description}</p>

        <div className="grid grid-cols-3 gap-2 text-xs mb-5">
          <div className="bg-accent-50 rounded-xl px-2.5 py-2.5 text-center">
            <div className="text-brand-400 text-[10px] uppercase tracking-wide">Rank</div>
            <div className="font-bold text-accent-700 mt-0.5">{indiaRank}</div>
          </div>
          <div className="bg-brand-50 rounded-xl px-2.5 py-2.5 text-center">
            <div className="text-brand-400 text-[10px] uppercase tracking-wide">MOQ</div>
            <div className="font-bold text-brand-700 mt-0.5">{moq}</div>
          </div>
          <div className="bg-brand-50 rounded-xl px-2.5 py-2.5 text-center">
            <div className="text-brand-400 text-[10px] uppercase tracking-wide">Pkg</div>
            <div className="font-bold text-brand-700 mt-0.5">{packaging}</div>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-900 bg-brand-50 hover:bg-brand-100 py-2.5 rounded-xl transition-all duration-300 group/btn"
        >
          Request Quote
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

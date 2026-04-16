import { ArrowRight, ImageIcon } from "lucide-react";
import Link from "next/link";

export type ProductCardData = {
  href: string;
  category: string;
  title: string;
  audience: string;
  shortDescription: string;
  features: string[];
  ctaLabel: string;
};

type ProductCardProps = {
  product: ProductCardData;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.href}
      aria-label={`${product.title} — ${product.ctaLabel}`}
      className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-emerald-500/40 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-emerald-300/40 dark:hover:bg-white/10 dark:focus-visible:outline-emerald-300/70"
    >
      <div className="mb-6 flex aspect-video w-full items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-100/50 dark:border-white/5 dark:bg-zinc-950/50">
        <ImageIcon className="h-8 w-8 text-zinc-400 opacity-50 dark:text-zinc-600" />
        <span className="sr-only">Thumbnail placeholder</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
          {product.category}
        </p>
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-600 dark:border-white/10 dark:bg-white/4 dark:text-zinc-300">
          {product.audience}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {product.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {product.shortDescription}
      </p>
      <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {product.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto mx-auto pt-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition group-hover:border-emerald-500/40 group-hover:text-emerald-600 dark:border-white/15 dark:text-white dark:group-hover:border-emerald-300/40 dark:group-hover:text-emerald-200">
          {product.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

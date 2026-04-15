import Link from "next/link";

import { ContactCtaButton } from "@/components/contact-modal-form";
import {
  RelatedProductLinks,
  type RelatedProductCard,
} from "@/components/related-product-links";

export type { RelatedProductCard };

type ProductDetailsPageProps = {
  category: string;
  title: string;
  description: string;
  eyebrow: string;
  shortDescription: string;
  features: string[];
  relatedProducts: RelatedProductCard[];
};

export function ProductDetailsPage({
  category,
  title,
  description,
  eyebrow,
  shortDescription,
  features,
  relatedProducts,
}: ProductDetailsPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          Wróć na stronę główną
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">
          {category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">{description}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-4xl border border-white/10 bg-white/4 p-8">
          <p className="text-sm font-medium text-zinc-200">{eyebrow}</p>
          <ul className="mt-8 space-y-4 text-base leading-7 text-zinc-300">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-4xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Dla kogo
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-300">
            {shortDescription}
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/4 p-5">
            <p className="text-sm text-zinc-200">
              Chcesz omówić ten scenariusz?
            </p>
            <ContactCtaButton
              data={{
                source: `Produkt: ${title}`,
                subject: `Kontakt — ${title}`,
              }}
              className="mt-4 inline-flex items-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              Napisz do nas
            </ContactCtaButton>
          </div>
        </aside>
      </div>

      <RelatedProductLinks items={relatedProducts} />
    </div>
  );
}

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
          className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          Wróć na stronę główną
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-300">
          {category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">{description}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="oc-surface-subtle rounded-4xl p-8">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">{eyebrow}</p>
          <ul className="mt-8 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-4xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
            Dla kogo
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {shortDescription}
          </p>
          <div className="oc-surface-subtle mt-8 rounded-2xl p-5">
            <p className="text-sm text-zinc-600 dark:text-zinc-200">
              Chcesz omówić ten scenariusz?
            </p>
            <ContactCtaButton
              data={{
                source: `Produkt: ${title}`,
                subject: `Kontakt — ${title}`,
              }}
              className="mt-4 inline-flex items-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
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

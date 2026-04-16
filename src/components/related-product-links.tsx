import Link from "next/link";

export type RelatedProductCard = {
  href: string;
  category: string;
  title: string;
  shortDescription: string;
};

type RelatedProductLinksProps = {
  items: RelatedProductCard[];
};

export function RelatedProductLinks({ items }: RelatedProductLinksProps) {
  return (
    <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-white/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
            Pozostałe produkty
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Zobacz inne kierunki OfferCloud.
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-emerald-500/40 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/3 dark:shadow-none dark:hover:border-emerald-300/40 dark:hover:bg-white/5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
              {item.category}
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

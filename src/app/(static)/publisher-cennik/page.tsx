import type { Metadata } from "next";
import Link from "next/link";

import { NoCopy } from "@/components/no-copy";

const pageTitle = "Cennik – OfferCloud";

export const metadata: Metadata = {
  title: pageTitle,
  description:
    "Cennik usług OfferCloud Marketplace – opłaty za tworzenie, publikację i promowanie ogłoszeń.",
};

const iframeSrc = "https://panel.offercloud.pl/cms/price-list/";

export default function PriceListPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-144 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_24%)]" />

      <section className="border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Wróć na stronę główną
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-300">
            OfferCloud Publisher
          </p>
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl sm:leading-[1.1]">
            Cennik publikacji ogłoszeń
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <NoCopy className="space-y-6 text-zinc-800 dark:text-zinc-200">
          <div className="oc-surface-subtle rounded-4xl p-6">
            <iframe
              src={iframeSrc}
              title="Cennik OfferCloud"
              className="h-[900px] w-full border-0"
              loading="lazy"
            />
          </div>
        </NoCopy>
      </section>
    </div>
  );
}

import { ArrowRight, Blocks, Settings2, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactCtaButton } from "@/components/contact-modal-form";
import { ProductCard, type ProductCardData } from "@/components/product-card";
import { MarketplaceFlowIllustration } from "@/ui/marketplace-flow-illustration";

const products: ProductCardData[] = [
  {
    href: "/produkty/offercloud-publisher",
    category: "OfferCloud",
    title: "Publisher",
    audience: "wydawcy i portale",
    shortDescription:
      "Moduł ogłoszeń i marketplace dla wydawców, portali informacyjnych oraz serwisów contentowych.",
    features: [
      "Proste osadzenie pod marką wydawcy bez opuszczania domeny.",
      "Monetyzacja publikacji i promocji ofert przy minimalnym udziale IT.",
      "Moderacja, rozliczenia i utrzymanie po stronie OfferCloud.",
    ],
    ctaLabel: "Zobacz produkt",
  },
  {
    href: "/produkty/marketplace-nieruchomosci",
    category: "OfferBoard",
    title: "Marketplace",
    audience: "operatorzy marketplace",
    shortDescription:
      "White label marketplace dla firm, które potrzebują własnych kategorii, filtrów i procesów publikacji (np. nieruchomości, job board).",
    features: [
      "Integracje z CRM, ATS lub innymi systemami źródłowymi.",
      "Własne kategorie, filtry i logika publikacji dopasowane do branży.",
      "Fundament pod własny marketplace pod marką klienta.",
    ],
    ctaLabel: "Poznaj rozwiązanie",
  },
  {
    href: "/produkty/marketplace-motoryzacja",
    category: "OfferPage",
    title: "Motoryzacja",
    audience: "dealerzy i sprzedawcy",
    shortDescription:
      "Strona ofertowa dla dealerów i sprzedawców z branży automotive: stock, filtry motoryzacyjne i generowanie leadów pod własną marką.",
    features: [
      "Katalog pojazdów z parametrami i filtrami typowymi dla motoryzacji.",
      "Architektura pod leady i konwersje (formularze, źródła, analityka).",
      "Marketplace jako opcja w wyższym pakiecie — nie jako trzon.",
    ],
    ctaLabel: "Sprawdź scenariusz",
  },
];

export const metadata: Metadata = {
  title: "Marketplace i oprogramowanie SaaS",
  description:
    "OfferCloud tworzy marketplace i oprogramowanie SaaS dla wydawców, nieruchomości oraz motoryzacji.",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-144 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_24%)]" />

      <section className="border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-300">
                OfferCloud
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl sm:leading-[1.02]">
                Marketplace SaaS i&nbsp;dedykowane rozwiązania ofertowe
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Projektujemy i dostarczamy produkty ofertowe dla wydawców,
                operatorów marketplace oraz branż motoryzacji, nieruchomości czy
                job-boardów. Łączymy gotowe wdrożenia SaaS,{" "}
                <span className="text-nowrap">white-label marketplace</span> i
                obsługę techniczną po naszej stronie.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#produkty"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
                >
                  Zobacz produkty
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <ContactCtaButton
                  data={{
                    source: "Home hero",
                    subject: "Porozmawiajmy o wdrożeniu — OfferCloud",
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
                >
                  Porozmawiajmy o wdrozeniu
                </ContactCtaButton>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-4">
                {[
                  "White-label marketplace i moduły ogłoszeń",
                  "SaaS z hostingiem, utrzymaniem i rozwojem",
                  "Osadzenie w istniejącym serwisie",
                  "Dla mediów, nieruchomości i motoryzacji",
                ].map((item) => (
                  <div
                    key={item}
                    className="oc-surface-subtle rounded-3xl px-5 py-4 text-sm text-zinc-600 dark:text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="pointer-events-none absolute inset-0 bg-emerald-400/5 blur-[100px] motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
              <MarketplaceFlowIllustration className="mx-auto w-full max-w-[500px]" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="produkty"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 sm:py-20"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
              Produkty
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Trzy produkty, trzy różne scenariusze wzrostu.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Każdy produkt jest zbudowany pod inny rynek, ale wszystkie
              korzystają z tego samego podejścia: szybkie wdrożenie, porządek w
              danych i realna wartość biznesowa.
            </p>
          </div>
          <div className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300">
            SaaS + marketplace + white-label
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Settings2,
              title: "Technologia po stronie OfferCloud",
              description:
                "Hosting, utrzymanie, rozwijanie produktu, aktualizacje i bezpieczeństwo nie obciążają klienta końcowego ani partnera.",
            },
            {
              icon: ShieldCheck,
              title: "Rozwiązania gotowe do uruchomienia",
              description:
                "Nie zaczynamy od pustego repozytorium. Bazujemy na sprawdzonych produktach i dostosowujemy je do konkretnego modelu biznesowego.",
            },
            {
              icon: Blocks,
              title: "Elastyczność wdrożenia",
              description:
                "Możemy osadzić marketplace jako widget, uruchomić niezależny serwis lub rozwijać produkt pod markę klienta, zależnie od scenariusza.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-4xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-none"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-white/6 dark:text-emerald-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-4">
        <div className="rounded-[2.5rem] border border-zinc-200 bg-linear-to-br from-zinc-50 to-emerald-50 p-8 sm:p-12 dark:border-white/10 dark:from-white/8 dark:to-emerald-300/8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                OfferCloud
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Szukasz gotowego produktu marketplace albo modułowego SaaS pod
                swój rynek?
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Opisz model biznesowy, a dobierzemy scenariusz: media,
                nieruchomości, motoryzacja albo rozwiązanie zbliżone do jednego
                z tych kierunków.
              </p>
            </div>

            <ContactCtaButton
              data={{
                source: "Home CTA (sekcja)",
                subject: "Kontakt — OfferCloud",
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
            >
              Przejdź do kontaktu
              <ArrowRight className="h-4 w-4" />
            </ContactCtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

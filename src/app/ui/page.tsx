import {
  ArrowRight,
  Blocks,
  Building2,
  LayoutGrid,
  Newspaper,
  Search,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import {
  RelatedProductLinks,
  type RelatedProductCard,
} from "@/components/related-product-links";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactCtaButton } from "@/components/contact-modal-form";
import { OfferCloudPublisherDemo } from "@/components/offercloud-publisher-demo";
import { ProductCard, type ProductCardData } from "@/components/product-card";
import { SolutionsDropdown } from "@/components/solutions-dropdown";

export const metadata: Metadata = {
  title: "UI Style Guide",
  description:
    "Zywy katalog wzorcow UI dla OfferCloud: kolory, typografia, CTA, karty, formularze i sekcje do ponownego wykorzystania.",
};

const products: ProductCardData[] = [
  {
    href: "/produkty/offercloud-publisher",
    category: "Publisher",
    title: "OfferCloud Publisher",
    audience: "wydawcy i portale",
    shortDescription:
      "Modul ogloszen i marketplace dla wydawcow, portali informacyjnych oraz serwisow contentowych.",
    features: [
      "Osadzenie pod marka wydawcy bez opuszczania domeny.",
      "Monetyzacja publikacji i promocji przy minimalnym udziale IT.",
      "Moderacja, rozliczenia i utrzymanie po stronie OfferCloud.",
    ],
    ctaLabel: "Zobacz produkt",
  },
  {
    href: "/produkty/marketplace-nieruchomosci",
    category: "Wlasne kategorie",
    title: "OfferBoard Marketplace",
    audience: "operatorzy marketplace",
    shortDescription:
      "Rozwiazanie dla nieruchomosci, job boardow i innych branz, ktore potrzebuja wlasnych kategorii, filtrow i procesow publikacji.",
    features: [
      "Integracje z CRM, ATS lub innymi systemami zrodlowymi.",
      "Wlasne kategorie, filtry i logika publikacji dopasowane do branzy.",
      "Fundament pod wlasny marketplace pod marka klienta.",
    ],
    ctaLabel: "Poznaj rozwiazanie",
  },
  {
    href: "/produkty/marketplace-motoryzacja",
    category: "Motoryzacja",
    title: "OfferPage Motoryzacja",
    audience: "dealerzy i sprzedawcy",
    shortDescription:
      "Marketplace dla dealerow, komisow i podmiotow profesjonalnych, laczacy stock z ofertami uzytkownikow.",
    features: [
      "Wspolna prezentacja stocku profesjonalnego i ogloszen od osob prywatnych.",
      "Filtry i architektura pod leady z branzy motoryzacyjnej.",
      "Model gotowy do wdrozenia i dalszej rozbudowy.",
    ],
    ctaLabel: "Sprawdz scenariusz",
  },
];

const relatedProducts: RelatedProductCard[] = [
  {
    href: "/produkty/offercloud-publisher",
    category: "Publisher",
    title: "OfferCloud Publisher",
    shortDescription:
      "Modul dla wydawcow, ktorzy rozwijaja powierzchnie ofertowe bez budowy osobnego backendu.",
  },
  {
    href: "/produkty/marketplace-nieruchomosci",
    category: "Marketplace",
    title: "OfferBoard Marketplace",
    shortDescription:
      "Marketplace dla branz z wlasnymi kategoriami, filtrami i procesami publikacji.",
  },
];

const dropdownItems = [
  {
    href: "/produkty/offercloud-publisher",
    title: "OfferCloud Publisher",
    subtitle: "Dla serwisow informacyjnych",
    auxiliaryLinks: [
      {
        href: "https://panel.offercloud.pl/",
        label: "Panel",
        external: true,
      },
      {
        href: "https://panel.offercloud.pl/auth/signup",
        label: "Rejestracja",
        external: true,
      },
    ],
  },
  {
    href: "/produkty/marketplace-nieruchomosci",
    title: "OfferBoard Marketplace",
    subtitle: "Dla nieruchomosci, job boardow i wlasnych kategorii",
  },
  {
    href: "/produkty/marketplace-motoryzacja",
    title: "OfferPage Motoryzacja",
    subtitle: "Dla motoryzacji",
  },
];

const colorTokens = [
  {
    name: "Canvas / base",
    swatchClassName: "bg-zinc-950",
    surfaceClassName: "border border-white/10 bg-zinc-950",
    note: "Glowne tlo strony i ekranow.",
  },
  {
    name: "Surface / subtle",
    swatchClassName: "bg-white/5",
    surfaceClassName: "border border-white/10 bg-white/5",
    note: "Karty, highlighty, panele i lekkie kontenery.",
  },
  {
    name: "Surface / elevated",
    swatchClassName: "bg-zinc-900/80",
    surfaceClassName: "border border-white/10 bg-zinc-900/80",
    note: "Ciemniejsze bloki i mocniejsze sekcje.",
  },
  {
    name: "Accent / primary",
    swatchClassName: "bg-emerald-300",
    surfaceClassName: "border border-emerald-300/20 bg-emerald-300/10",
    note: "CTA, kropki list, aktywne highlighty.",
  },
  {
    name: "Border / soft",
    swatchClassName: "bg-white/10",
    surfaceClassName: "border border-white/10 bg-transparent",
    note: "Obramowania kart, sekcji i dropdownow.",
  },
  {
    name: "Gradient / CTA",
    swatchClassName: "bg-linear-to-br from-white/8 to-emerald-300/8",
    surfaceClassName:
      "border border-white/10 bg-linear-to-br from-white/8 to-emerald-300/8",
    note: "Sekcje konczace i wezwania do kontaktu.",
  },
];

const typographyScale = [
  {
    label: "Eyebrow",
    className:
      "text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300",
    preview: "OfferCloud UI",
  },
  {
    label: "Hero h1",
    className:
      "text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.06]",
    preview:
      "Marketplace i oprogramowanie SaaS pod konkretne modele biznesowe.",
  },
  {
    label: "Section h2",
    className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl",
    preview: "Wzorce do utrzymania spojnego UI na wszystkich podstronach.",
  },
  {
    label: "Card h3",
    className: "text-xl font-semibold text-white",
    preview: "Karta funkcjonalna z ikona i opisem.",
  },
  {
    label: "Body large",
    className: "text-lg leading-8 text-zinc-300",
    preview:
      "Wiekszy tekst opisowy dla hero i kluczowych sekcji, z wyraznym rytmem i czytelnym kontrastem.",
  },
  {
    label: "Body small",
    className: "text-sm leading-7 text-zinc-400",
    preview: "Tekst pomocniczy do kart, FAQ, formularzy i mniejszych opisow.",
  },
];

const layoutTokens = [
  "Kontener: mx-auto max-w-6xl px-6",
  "Sekcje: py-16, py-20, py-28",
  "Zaokraglenia: rounded-full, rounded-2xl, rounded-3xl, rounded-4xl",
  "Granice: border border-white/10",
  "Hover: hover:bg-white/5, hover:border-white/30, hover:border-emerald-300/40",
  "Tlo akcentowe: bg-emerald-300/10, bg-white/5, bg-zinc-900/70",
];

const featureCards = [
  {
    title: "Dla wydawcow i portali",
    description:
      "Karta z jasniejsza powierzchnia i akcentowa ikona, uzywana przy scenariuszach biznesowych.",
    icon: Newspaper,
    className: "rounded-4xl border border-white/10 bg-white/4 p-7",
    iconClassName: "bg-emerald-300/10 text-emerald-200",
  },
  {
    title: "Dla operatorow marketplace",
    description:
      "Wariant o tej samej strukturze z mocniejszym tlem do ciezszych blokow tresci.",
    icon: Building2,
    className: "rounded-4xl border border-white/10 bg-zinc-900/70 p-7",
    iconClassName: "bg-white/6 text-emerald-200",
  },
  {
    title: "Dla scenariuszy branzowych",
    description:
      "Ta sama logika kart pozwala skalowac sekcje informacyjne bez rozjezdzania stylu.",
    icon: Blocks,
    className: "rounded-4xl border border-white/10 bg-white/4 p-7",
    iconClassName: "bg-emerald-300/10 text-emerald-200",
  },
];

const statCards = [
  {
    value: "Nowy przychod",
    label:
      "Sekcja statystyk i outcome cards do szybkiego komunikowania wartosci.",
  },
  {
    value: "Mniej IT",
    label:
      "Wariant dla benefitow z mocnym pierwszym wierszem i krotszym opisem.",
  },
  {
    value: "Lepsza retencja",
    label:
      "Dobrze dziala w gridzie 3-4 kolumn przy zachowaniu duzych odstepow.",
  },
];

const detailFeatures = [
  "Integracje z CRM biur nieruchomosci i automatyczne odswiezanie danych.",
  "Jednolity model prezentacji ofert mimo roznych zrodel danych.",
  "Szybsze uruchomienie marketplace i prostsza obsluga publikacji.",
];

const widgetRows = [
  "Sprzedam rower trekkingowy • Gdansk",
  "Wynajme lokal uslugowy • Wrzeszcz",
  "Szukam opiekunki do psa • Sopot",
];

const faqItems = [
  {
    question: "Czy /ui ma byc zrodlem prawdy dla nowych podstron?",
    answer:
      "Tak. Najpierw sprawdzamy tutaj istniejace wzorce, a jesli brakuje potrzebnego elementu, dodajemy go jako nowy, wielokrotnego uzytku pattern.",
  },
  {
    question: "Czy wszystkie sekcje musza byc identyczne?",
    answer:
      "Nie, ale powinny korzystac z tych samych tokenow: kontenera, rytmu spacingu, CTA, kart, obramowan i hierarchii typografii.",
  },
  {
    question: "Co robic, gdy potrzebny jest nowy wariant?",
    answer:
      "Najpierw tworzymy wariant w sposob reuzywalny, dokumentujemy go na /ui i dopiero potem stosujemy na docelowej podstronie.",
  },
];

const demoEmbedCode = `<iframe
  src="https://client.offercloud.pl/marketplaces/offercloud/offers"
  title="OfferCloud Publisher Demo"
  style="width: 100%; min-height: 720px; border: 0;"
></iframe>
<script
  type="text/javascript"
  src="https://client.offercloud.pl/js/iframeResizer.min.js"
></script>`;

type GuideSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function GuideSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: GuideSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-14 sm:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-300">{description}</p>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

type SwatchCardProps = {
  name: string;
  swatchClassName: string;
  surfaceClassName: string;
  note: string;
};

function SwatchCard({
  name,
  swatchClassName,
  surfaceClassName,
  note,
}: SwatchCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/3 p-5">
      <div className={`h-20 rounded-2xl ${swatchClassName}`} />
      <div className={`mt-4 rounded-2xl p-4 ${surfaceClassName}`}>
        <p className="text-sm font-semibold text-white">{name}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-400">{note}</p>
    </div>
  );
}

export default function UiPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-176 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(59,130,246,0.12),transparent_26%)]" />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">
            OfferCloud UI
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.06]">
            Style guide i zywy katalog wzorcow do wielokrotnego wykorzystania.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Ta strona zbiera aktualny jezyk wizualny projektu: kolory,
            typografie, CTA, karty, formularze i zlozone sekcje. Wszystkie nowe
            podstrony powinny zaczynac od wzorcow zdefiniowanych tutaj.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#fundamenty"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              Zobacz fundamenty
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#komponenty"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Przejdz do komponentow
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              "Source of truth dla przyszlych podstron.",
              "Wspolne CTA, karty, formularze i sekcje.",
              "Reuzywalne wzorce oparte na istniejacym UI.",
              "Nowe warianty dodajemy najpierw tutaj.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuideSection
        id="fundamenty"
        eyebrow="Fundamenty"
        title="Kolory, typografia i tokeny layoutu."
        description="Obecny design system opiera sie na ciemnym canvasie, subtelnych powierzchniach, akcencie emerald oraz konsekwentnym rytmie spacingu i zaokraglen."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {colorTokens.map((token) => (
              <SwatchCard key={token.name} {...token} />
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-zinc-900/70 p-8">
              <p className="text-sm font-medium text-zinc-200">
                Hierarchia tekstu
              </p>
              <div className="mt-8 space-y-6">
                {typographyScale.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className={`mt-3 ${item.className}`}>{item.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/4 p-8">
              <p className="text-sm font-medium text-zinc-200">
                Najczesciej uzywane tokeny
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {layoutTokens.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection
        id="cta"
        eyebrow="CTA i nawigacja"
        title="Przyciski, linki akcji i sterowanie pomocnicze."
        description="Bazowy zestaw interakcji to primary CTA na emerald, secondary outline oraz elementy wspomagajace na bialych, przezroczystych powierzchniach."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-8">
            <p className="text-sm font-medium text-zinc-200">Button set</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#produkty"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Primary CTA
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#obszary"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Secondary CTA
              </Link>
              <ContactCtaButton
                data={{
                  source: "UI guide CTA",
                  subject: "Kontakt — UI style guide",
                }}
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Modal CTA
              </ContactCtaButton>
              <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
                Label / pill
              </span>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-zinc-900/70 p-8">
            <p className="text-sm font-medium text-zinc-200">
              Dropdown i linki pomocnicze
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex min-h-24 items-start justify-between rounded-3xl border border-white/10 bg-black/20 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Navigation
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Ten dropdown jest juz uzywany w headerze i moze sluzyc jako
                    wzorzec menu kontekstowego na desktopie.
                  </p>
                </div>
                <SolutionsDropdown items={dropdownItems} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Micro interactions
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-300">
                  <Link href="/" className="transition hover:text-white">
                    Link tekstowy
                  </Link>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">
                    Badge
                  </span>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Accent pill
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection
        id="komponenty"
        eyebrow="Komponenty"
        title="Karty, bloki informacyjne i uklady produktowe."
        description="Tutaj sa zywe przyklady glownego repertuaru komponentow: karty produktowe, karty ikonowe, statystyki i split layout dla stron produktowych."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={item.className}>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconClassName}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {statCards.map((item) => (
            <div
              key={item.value}
              className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 transition hover:border-emerald-300/30 hover:bg-white/6"
            >
              <p className="text-2xl font-semibold tracking-tight text-white">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-4xl border border-white/10 bg-white/4 p-8">
            <p className="text-sm font-medium text-zinc-200">Feature split</p>
            <ul className="mt-8 space-y-4 text-base leading-7 text-zinc-300">
              {detailFeatures.map((feature) => (
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
              Ten wzorzec sluzy do prawostronnego panelu kontekstowego z CTA i
              skrotem scenariusza.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/4 p-5">
              <p className="text-sm text-zinc-200">
                Chcesz omowic ten scenariusz?
              </p>
              <ContactCtaButton
                data={{
                  source: "UI detail aside",
                  subject: "Kontakt — feature split",
                }}
                className="mt-4 inline-flex items-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Napisz do nas
              </ContactCtaButton>
            </div>
          </aside>
        </div>
      </GuideSection>

      <GuideSection
        id="sekcje"
        eyebrow="Zlozone sekcje"
        title="Hero split, mock widget i gradientowe wezwanie do akcji."
        description="To wzorce sekcji, ktore spajaja landing page oraz strony produktowe. Nadaja stronie charakter i porzadkuja hierarchie tresci."
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-emerald-300">
              OfferCloud Publisher
            </p>
            <h3 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.04]">
              Zamien portal informacyjny w lokalny marketplace, ktory przyciaga
              ruch i generuje przychod.
            </h3>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              Ten hero pattern laczy duzy komunikat, dwa CTA i prosty highlight
              benefitow. To najwazniejszy wzorzec otwarcia dla stron
              produktowych.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ContactCtaButton
                data={{
                  source: "UI hero example",
                  subject: "Rozmowa o wdrozeniu — UI guide",
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Porozmawiajmy o wdrozeniu
                <ArrowRight className="h-4 w-4" />
              </ContactCtaButton>
              <Link
                href="#formularze"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Zobacz formularze
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Marketplace pod marka i domena wydawcy",
                "Osadzenie bez przekierowan przez prosty kod JavaScript",
                "Monetyzacja publikacji i promocji bez prowizji od transakcji",
                "Moderacja, rozliczenia i obsluga po stronie OfferCloud",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-zinc-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">
                    Twoj serwis
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Marketplace osadzony bez opuszczania strony
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Widget + pelna tablica
                </div>
              </div>

              <div className="grid gap-4 p-6">
                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                          Aktualne ogloszenia
                        </p>
                        <p className="mt-2 text-sm font-medium text-white">
                          Lokalny rynek dzialajacy obok tresci redakcyjnych
                        </p>
                      </div>
                      <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                        pod Twoja marka
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      {widgetRows.map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-zinc-200"
                        >
                          <span>{item}</span>
                          <span className="text-xs text-zinc-500">aktywny</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Dodawanie ofert
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        Bez konta i hasla
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Minimalna liczba pol, link do zarzadzania przez e-mail i
                        niski prog wejscia dla lokalnej spolecznosci.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        Monetyzacja
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        Publikacje i promocje ofert
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Partner zarabia na uslugach dodatkowych, a nie na
                        prowizji od samej sprzedazy miedzy uzytkownikami.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Ekosystem OfferCloud",
                    "Moderacja i rozliczenia po naszej stronie",
                    "Filtry, kontakt i czytelna lista ofert",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {index === 0
                          ? "Zasieg"
                          : index === 1
                            ? "Operacja"
                            : "UX"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2.5rem] border border-white/10 bg-linear-to-br from-white/8 to-emerald-300/8 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Gradient CTA
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Sekcja konczaca, ktora domyka narracje i prowadzi do kontaktu.
              </h3>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Ten pattern warto reuzywac przy finalnych CTA na landingach i
                stronach produktowych.
              </p>
            </div>

            <ContactCtaButton
              data={{
                source: "UI gradient CTA",
                subject: "Kontakt — sekcja CTA",
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              Przejdz do kontaktu
              <ArrowRight className="h-4 w-4" />
            </ContactCtaButton>
          </div>
        </div>
      </GuideSection>

      <GuideSection
        id="demo"
        eyebrow="Embed i live demo"
        title="Sekcja osadzenia produktu bez opuszczania strony partnera."
        description="Ten pattern sluzy do pokazania realnego osadzenia marketplace w serwisie klienta. Najpierw pokazujemy kod, potem wyraznie zaznaczamy obszar dynamiczny i dopiero pod nim uruchamiamy demo."
      >
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-900/75 p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Live demo
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ponizej tresc jest dynamicznie generowana przez OfferCloud
              Publisher.
            </h3>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              To dobry wzorzec dla stron produktowych, gdy chcesz polaczyc
              argument sprzedazowy z realnym podgladem osadzenia wewnatrz strony
              partnera.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10 bg-zinc-950 px-5 py-4">
            <pre className="text-sm leading-7 text-zinc-300">
              <code>{demoEmbedCode}</code>
            </pre>
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
            Od tego miejsca do konca obszaru demo tresc jest dynamicznie
            generowana przez produkt OfferCloud Publisher.
          </div>

          <div className="mt-6 overflow-hidden rounded-4xl border border-white/10 bg-white">
            <OfferCloudPublisherDemo className="min-h-[720px] bg-white" />
          </div>
        </div>
      </GuideSection>

      <GuideSection
        id="formularze"
        eyebrow="Formularze i tresci rozwijane"
        title="Pola formularza, FAQ i gotowe sekcje kontaktowe."
        description="Formularze korzystaja z tego samego jezyka powierzchni, focus state i zaokraglen co pozostala czesc serwisu. FAQ bazuje na prostym details/summary."
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-white/10 bg-zinc-900/70 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Form fields
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                Imie i nazwisko
                <input
                  readOnly
                  value="Jan Kowalski"
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                Email
                <input
                  readOnly
                  value="jan@firma.pl"
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                Numer telefonu
                <input
                  readOnly
                  value="+48 600 000 000"
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                />
              </label>
              <label className="md:col-span-2 flex flex-col gap-2 text-sm text-zinc-300">
                Wiadomosc
                <textarea
                  readOnly
                  rows={6}
                  value="Opis potrzeb, rynku i modelu wdrozenia."
                  className="rounded-3xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/50"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-white/10 bg-white/4 px-6 py-5 open:bg-white/6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="text-zinc-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <RelatedProductLinks items={relatedProducts} />
        </div>
      </GuideSection>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-4 sm:pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-900/70 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Jak korzystac z tego katalogu
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Najpierw reuse, potem nowy pattern.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: LayoutGrid,
                  title: "Reuse first",
                  description:
                    "Nowa sekcja powinna zaczynac od patternu z /ui, nie od nowego zestawu klas.",
                },
                {
                  icon: Settings2,
                  title: "Extract shared UI",
                  description:
                    "Jesli wzorzec ma wracac, wydziel go do komponentu lub stabilnego bloku.",
                },
                {
                  icon: ShieldCheck,
                  title: "Keep consistency",
                  description:
                    "Pilnuj tych samych spacingow, borderow, CTA i hierarchii tekstu.",
                },
                {
                  icon: Search,
                  title: "Document additions",
                  description:
                    "Jesli czegos brakuje, dopisz to do /ui zanim uzyjesz na innej podstronie.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/4 p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

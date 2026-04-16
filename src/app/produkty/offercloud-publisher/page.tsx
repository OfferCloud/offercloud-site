import {
  ArrowRight,
  Banknote,
  Globe,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { OfferCloudPublisherDemo } from "@/components/offercloud-publisher-demo";

const pageTitle = "OfferCloud Publisher";

const publisherSignupHref = "https://panel.offercloud.pl/auth/signup";

type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type StepItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const heroHighlights = [
  "Marketplace pod marką wydawcy",
  "Bezpłatny dla partnera (wydawcy)",
  "Osadzenie przez prosty kod JavaScript",
  "Monetyzacja publikacji i promocji ofert",
  "Technologia, utrzymanie i operacja po stronie OfferCloud",
];

const keyBenefits: BenefitItem[] = [
  {
    title: "Nowy przychód bez nowego backendu",
    description:
      "Wydawca zarabia na publikacjach i promocjach ofert, a nie buduje własnego silnika ogłoszeń od zera.",
    icon: Banknote,
  },
  {
    title: "Więcej świeżej treści i powrotów",
    description:
      "Lokalne ogłoszenia zwiększają użyteczność serwisu, wspierają SEO i budują powtarzalny ruch wokół treści redakcyjnych.",
    icon: Globe,
  },
  {
    title: "Mniej operacji po stronie redakcji",
    description:
      "Hosting, aktualizacje, moderacja i rozliczenia są po naszej stronie, więc zespół nie dostaje kolejnego procesu do obsługi.",
    icon: ShieldCheck,
  },
];

const launchSteps: StepItem[] = [
  {
    title: "Rejestracja jako Partner",
    description:
      "Rejestrujesz się jako Partner w panelu OfferCloud i tworzysz jeden lub wiele marketplaces, zgodnie z potrzebami biznesowymi.",
  },
  {
    title: "Wklejasz kod i uruchamiasz demo lub wdrożenie",
    description:
      "Produkt renderuje się w Twojej stronie bez przekierowań i bez budowy osobnego zaplecza technicznego.",
  },
  {
    title: "OfferCloud prowadzi operację, Ty rozwijasz kanał",
    description:
      "My obsługujemy technologię i proces, a Ty korzystasz z większego zaangażowania, treści i przychodu.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Jaki jest koszt OfferCloud Publisher?",
    answer:
      "Koszt to 0 zł. Dla partnera (wydawcy) jest bezpłatny — zarabiasz prowizyjnie na usługach opłacanych przez użytkowników końcowych (np. publikacje w kategoriach płatnych i promocje ofert).",
  },
  {
    question: "Czy potrzebny jest własny zespół developerski?",
    answer:
      "Nie. Po stronie partnera zostaje osadzenie gotowego kodu i decyzja, gdzie moduł ma być widoczny.",
  },
  {
    question: "Na czym zarabia wydawca?",
    answer:
      "Na usługach wokół ogłoszeń, takich jak publikacje w kategoriach płatnych i opcje promowania ofert.",
  },
  {
    question: "Czy moduł można dopasować do serwisu?",
    answer:
      "Tak. OfferCloud Publisher może być osadzony pod marką wydawcy i dopasowany do istniejącego kontekstu produktu.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description:
    "OfferCloud Publisher to gotowy moduł ogłoszeń dla portali i wydawców: osadzenie w serwisie, monetyzacja publikacji i promocji oraz pełna obsługa techniczna po stronie OfferCloud.",
  openGraph: {
    title: pageTitle,
    description:
      "Gotowy moduł ogłoszeń OfferCloud dla wydawców: marketplace w modelu SaaS, kod do osadzenia, monetyzacja i pełna obsługa techniczna.",
    type: "website",
  },
};

export default function OfferCloudPublisherPage() {
  return (
    <div id="publisher" className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-176 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_34%),radial-gradient(circle_at_75%_15%,rgba(16,185,129,0.18),transparent_24%)]" />

      <section className="border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Link
              href="/"
              className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Wróć na stronę główną
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-300">
              OfferCloud Publisher
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl sm:leading-[1.02]">
              Lokalny marketplace dla wydawcy, bez budowy własnego systemu
              ogłoszeń.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Osadzasz produkt w swoim serwisie, utrzymujesz ruch w swojej
              domenie i otwierasz nowy kanał monetyzacji. OfferCloud bierze na
              siebie technologię, utrzymanie i obsługę operacyjną.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              Dla partnera (wydawcy) produkt jest bezpłatny.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={publisherSignupHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
              >
                Zarejestruj się jako Partner za 0 zł
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://panel.offercloud.pl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
              >
                Panel
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-zinc-700 dark:text-zinc-200 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/10 blur-3xl" />
            <div className="oc-card-group relative flex flex-col gap-3">
              {[
                {
                  label: "Dlaczego to działa",
                  value: "Jeden produkt łączy treść, retencję i monetyzację.",
                },
                {
                  label: "Dla czytelnika",
                  value:
                    "Nowa użyteczna treść i prosty sposób dodawania ogłoszeń.",
                },
                {
                  label: "Dla wydawcy",
                  value: "Nowy strumień przychodu bez dokładania ciężaru IT.",
                },
                {
                  label: "Dla zespołu",
                  value:
                    "Moderacja, rozliczenia i utrzymanie zostają po stronie OfferCloud.",
                },
                {
                  label: "Dla wdrożenia",
                  value:
                    "Szybki start przez osadzenie modułu, bez budowy osobnego backendu.",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="oc-card-pop rounded-3xl border border-zinc-200 bg-white px-6 py-5 shadow-xl dark:border-white/10 dark:bg-black/20 dark:shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
                  style={
                    { "--oc-delay": `${index * 1.2}s` } as React.CSSProperties
                  }
                >
                  <p className="oc-card-label text-xs uppercase tracking-[0.22em]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
            Najważniejsze korzyści
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Strona informacyjna dostaje nowy produkt, a nie kolejny koszt do
            utrzymania.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {keyBenefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border-t border-zinc-200 pt-5 dark:border-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-300/10 dark:text-emerald-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="demo"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-10 sm:py-14"
      >
        <div className="oc-surface-panel rounded-[2.5rem] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Demo
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Live demo OfferCloud Publisher
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Ten fragment pokazuje realny sposób osadzenia modułu na stronie
              partnera. Powinien się znajdować na oddzielnej podstronie,
              pomiedzy nagłówkiem i stopką, aby moduł miał swój kontekst danego
              serwisu informacyjnego.{" "}
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Od zaznaczonego miejsca treść jest dynamicznie generowana przez
              OfferCloud Publisher.
            </p>
          </div>

          <div className="mt-5 text-center rounded-2xl border border-emerald-500/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100">
            DEMO START
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm dark:shadow-none">
            <OfferCloudPublisherDemo className="min-h-[720px] bg-white" />
          </div>

          <div className="mt-5 text-center rounded-2xl border border-emerald-500/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100">
            DEMO END
          </div>
        </div>
      </section>

      <section
        id="jak-to-dziala"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-14 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Jak to działa
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Trzy krótkie kroki do uruchomienia lokalnego marketplace.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              To ma być szybki ruch po stronie redakcji i gotowy produkt po
              stronie technologii.
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Wdrożenie zajmuje 5 minut
            </p>
          </div>

          <ol className="space-y-8">
            {launchSteps.map((step, index) => (
              <li key={step.title} className="border-l border-zinc-200 pl-6 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-50 text-sm font-semibold text-emerald-700 dark:border-emerald-300/25 dark:bg-emerald-300/10 dark:text-emerald-200">
                    0{index + 1}
                  </div>
                  <Workflow className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Najczęstsze pytania przed startem.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-zinc-200 bg-white px-6 py-5 open:bg-zinc-50/50 dark:border-white/10 dark:bg-white/4 dark:open:bg-white/6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-zinc-900 dark:text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="text-zinc-400 transition group-open:rotate-45 dark:text-zinc-500">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-6">
        <div className="rounded-[2.5rem] border border-zinc-200 bg-linear-to-br from-zinc-50 to-emerald-50 p-8 sm:p-12 dark:border-white/10 dark:from-white/8 dark:to-emerald-300/8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Dla wydawców, którzy chcą sprzedawać
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Uruchom marketplace, który wygląda jak część Twojego serwisu i
                pracuje na Twój biznes.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Jeśli chcesz szybko sprawdzić ten scenariusz u siebie, zacznij
                od rejestracji w panelu Partnera i uruchom pierwszy marketplace.
              </p>
            </div>

            <Link
              href={publisherSignupHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
            >
              Zarejestruj się i uruchom moduł ogłoszeń
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

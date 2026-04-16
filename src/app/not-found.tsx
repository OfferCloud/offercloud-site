import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { Error404Illustration } from "@/components/lottie/error-404-illustration";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-(--spacing(32)))] flex-col items-center justify-center overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.12),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(59,130,246,0.08),transparent_26%)]" />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-0 bg-emerald-400/8 blur-3xl dark:bg-emerald-400/12" />
            <Error404Illustration className="relative mx-auto aspect-square w-full max-w-lg" />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-emerald-600 dark:text-emerald-300">
            Błąd 404
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl sm:leading-[1.06]">
            Wygląda na to, że ta strona wypadła z naszej orbity.
          </h1>
          <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Link może być nieaktualny, strona została przeniesiona lub nigdy nie
            istniała. Nic straconego — wróćmy do sprawdzonych obszarów
            ekosystemu OfferCloud.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
            >
              <Home className="h-4 w-4" />
              Wróć na stronę główną
            </Link>
            <Link
              href="/#produkty"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
            >
              Zobacz produkty
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid w-full gap-3 sm:grid-cols-2">
            {[
              { label: "OfferCloud Publisher", href: "/produkty/offercloud-publisher" },
              { label: "OfferBoard Marketplace", href: "/produkty/marketplace-nieruchomosci" },
              { label: "OfferPage Motoryzacja", href: "/produkty/marketplace-motoryzacja" },
              { label: "Kontakt z nami", href: "/kontakt" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

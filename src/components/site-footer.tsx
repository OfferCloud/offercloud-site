import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-zinc-50/50 dark:border-white/10 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Opis firmy */}
          <div className="flex flex-col">
            <div className="space-y-5">
              <Link
                href="/"
                className="inline-block text-lg font-semibold tracking-[0.025em] text-zinc-900 dark:text-white"
              >
                OfferCloud<span className="text-emerald-600 dark:text-emerald-300">_</span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Oprogramowanie SaaS do budowy platform ofertowych i marketplace. 
                Dostarczamy gotowe moduły ogłoszeniowe dla wydawców, portali 
                informacyjnych, branży nieruchomości oraz motoryzacyjnej.
              </p>
            </div>
            <p className="mt-auto pt-8 text-xs text-zinc-500 sm:pt-12">
              &copy; {new Date().getFullYear()} OfferCloud Sp. z o.o. Wszelkie prawa zastrzeżone.
            </p>
          </div>

          {/* Rozwiązania */}
          <div className="space-y-5">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Rozwiązania</p>
            <nav className="flex flex-col space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href="/produkty/offercloud-publisher"
                className="transition hover:text-zinc-900 dark:hover:text-white"
              >
                Dla wydawców
              </Link>
              <Link
                href="/produkty/marketplace-nieruchomosci"
                className="transition hover:text-zinc-900 dark:hover:text-white"
              >
                Dla nieruchomości
              </Link>
              <Link
                href="/produkty/marketplace-motoryzacja"
                className="transition hover:text-zinc-900 dark:hover:text-white"
              >
                Dla motoryzacji
              </Link>
              <Link
                href="/#produkty"
                className="transition hover:text-zinc-900 dark:hover:text-white"
              >
                Wszystkie produkty
              </Link>
            </nav>
          </div>

          {/* Kontakt i dane */}
          <div className="space-y-5 md:text-right">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Kontakt i dane firmy</p>
            <div className="flex flex-col space-y-3 text-sm text-zinc-600 dark:text-zinc-400 md:items-end">
              <address className="not-italic leading-relaxed">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">OfferCloud Sp. z o.o.</span>
                <br />
                ul. Bukszpanowa 4/3
                <br />
                20-810 Lublin
              </address>
              
              <div className="leading-relaxed">
                NIP: 9462699513
                <br />
                KRS: 0000856744
              </div>

              <a
                href="mailto:support@offercloud.pl"
                className="inline-block font-medium text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200"
              >
                support@offercloud.pl
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

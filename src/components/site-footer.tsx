import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-sm text-zinc-400 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            OfferCloud
          </p>
          <p className="max-w-md leading-7">
            Budujemy marketplace&apos;y i moduły ogłoszeń dla wydawców,
            nieruchomości oraz motoryzacji. Dla mediów dostarczamy gotowy model,
            który łączy zaangażowanie, SEO i nowe przychody bez rozbudowy
            zaplecza IT.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-white">Na skroty</p>
          <Link
            href="/#produkty"
            className="block transition hover:text-white"
          >
            Produkty
          </Link>
          <Link
            href="/#obszary"
            className="block transition hover:text-white"
          >
            Obszary działania
          </Link>
          <Link
            href="/produkty/offercloud-publisher"
            className="block transition hover:text-white"
          >
            OfferCloud Publisher
          </Link>
          <Link
            href="/produkty/marketplace-nieruchomosci"
            className="block transition hover:text-white"
          >
            Nieruchomości
          </Link>
          <Link
            href="/produkty/marketplace-motoryzacja"
            className="block transition hover:text-white"
          >
            Motoryzacja
          </Link>
        </div>
        <div className="space-y-3 md:text-right">
          <p className="text-white">Kontakt</p>
          <a
            href="mailto:hello@offercloud.app"
            className="transition hover:text-white"
          >
            hello@offercloud.app
          </a>
          <p>
            Porozmawiajmy o wdrożeniu marketplace dla Twojego serwisu lub marki.
          </p>
        </div>
      </div>
    </footer>
  );
}

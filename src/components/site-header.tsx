import Link from "next/link";

import { ContactCtaButton } from "@/components/contact-modal-form";
import { SolutionsDropdown } from "@/components/solutions-dropdown";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const solutionLinks = [
  {
    href: "/produkty/offercloud-publisher",
    title: "OfferCloud Publisher",
    subtitle: "Dla serwisów informacyjnych",
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
    subtitle: "Dla nieruchomości, job boardów i własnych kategorii",
  },
  {
    href: "/produkty/marketplace-motoryzacja",
    title: "OfferPage Motoryzacja",
    subtitle: "Dla dealerów i sprzedawców branży automotive",
  },
];

const navigation = [{ hash: "produkty", label: "Produkty" }];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-[0.025em] text-zinc-900 dark:text-white"
        >
          OfferCloud<span className="text-emerald-600 dark:text-emerald-300">_</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300">
          <ContactCtaButton
            data={{
              source: "Header (mobile)",
              subject: "Kontakt — OfferCloud",
            }}
            className="inline-flex rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 md:hidden dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            Kontakt
          </ContactCtaButton>
          <SolutionsDropdown items={solutionLinks} />
          {navigation.map((item) => (
            <Link
              key={`${item.hash}-${item.label}`}
              href={`/#${item.hash}`}
              className="hidden font-semibold transition hover:text-zinc-900 md:inline-flex dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <ContactCtaButton
            data={{
              source: "Header CTA",
              subject: "Kontakt — OfferCloud",
            }}
            className="hidden cursor-pointer rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:inline-flex dark:bg-emerald-300 dark:text-zinc-950 dark:hover:bg-emerald-200"
          >
            Kontakt
          </ContactCtaButton>
        </nav>
      </div>
    </header>
  );
}

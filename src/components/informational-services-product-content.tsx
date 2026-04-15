import Link from "next/link";
import { Banknote, Server, Users, UserCheck, MessageSquare, Share2, Search, ImageIcon } from "lucide-react";

import { ContactCtaButton } from "@/components/contact-modal-form";

const businessBenefits = [
  {
    title: "Nowy strumien przychodow",
    description:
      "Zarabiaj na oplatach za publikacje i wyroznienia. Dzieki wbudowanym pakietom promujacych (Mini, Midi, Maxi), Twoi czytelnicy sami finansuja rozwoj narzedzia, a Ty otrzymujesz prowizje.",
    icon: Banknote,
  },
  {
    title: "Zero kosztow i obslugi IT",
    description:
      "Dostarczamy gotowy produkt w modelu SaaS. My dbamy o serwery, bezpieczenstwo, utrzymanie i nowe funkcje. Ty po prostu wklejasz kod na swoja strone.",
    icon: Server,
  },
  {
    title: "Lojalnosc czytelnikow",
    description:
      "Lokalny rynek ogloszen przyciaga uzytkownikow i sprawia, ze czesciej wracaja do Twojego serwisu. Przestajesz byc tylko zrodlem newsow — stajesz sie centrum lokalnej spolecznosci.",
    icon: Users,
  },
];

const userFeatures = [
  {
    title: "Ogloszenia bez rejestracji",
    description:
      "Szanujemy czas uzytkownikow. Aby dodac oferte, wystarczy adres e-mail i akceptacja regulaminu. Zero formularzy, zero zbednych barier.",
    icon: UserCheck,
  },
  {
    title: "Wiadomosci i bezpieczny kontakt",
    description:
      "Wbudowany system komunikacji pozwala na bezpieczne dogrywanie szczegolow transakcji miedzy kupujacym a sprzedajacym — bez prowizji od samej transakcji.",
    icon: MessageSquare,
  },
  {
    title: "Sila rozproszonej sieci",
    description:
      "Ogloszenie dodane u Ciebie moze byc widoczne takze w innych zaprzyjaznionych serwisach nalezacych do ekosystemu OfferCloud. Wiekszy zasieg to szybsza sprzedaz.",
    icon: Share2,
  },
  {
    title: "Zaawansowana wyszukiwarka",
    description:
      "Szybkie, precyzyjne filtry kategorii, cen i lokalizacji. Uzytkownicy natychmiast znajduja to, co ich interesuje w ich najblizszej okolicy.",
    icon: Search,
  },
];

export function InformationalServicesProductContent() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Wprowadzenie / Value Proposition */}
      <section className="relative overflow-hidden rounded-[3rem] border border-emerald-400/20 bg-linear-to-b from-emerald-400/10 to-transparent p-8 sm:p-16">
        <div className="relative z-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Dla wydawcow i portali
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            Zmien ruch na swojej stronie w wysoce dochodowy biznes.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            OfferCloud to kompletny modul ogloszeniowy typu whitelabel. W kilka minut dodajesz
            nowoczesny marketplace do swojego serwisu, zatrzymujesz uzytkownikow na dluzej i
            zaczynasz zarabiac na lokalnym handlu. Bez obciazania wlasnego zespolu IT.
          </p>
        </div>
        <div className="relative z-10 mt-12 flex aspect-21/9 w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/50 text-zinc-500 shadow-2xl">
          <ImageIcon className="h-10 w-10 mb-3 opacity-50" />
          <span className="text-sm font-medium tracking-widest uppercase">Miejsce na grafike / UI modulu ogloszen</span>
        </div>
      </section>

      {/* Benefity Biznesowe */}
      <section>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Dlaczego wydawcy wybieraja OfferCloud?
          </h3>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Zaprojektowalismy to rozwiazanie tak, aby generowalo zyski bez generowania problemow.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {businessBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/2 p-8 transition hover:bg-white/4"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-white">{benefit.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Funkcje dla uzytkownikow */}
      <section className="rounded-[3rem] border border-white/10 bg-zinc-900 p-8 sm:p-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-lg lg:w-1/2">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Doswiadczenie, ktore zatrzyma czytelnikow.
            </h3>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Uzytkownicy nie znosza skomplikowanych formularzy i przestarzalych tablic ogloszeniowych.
              Nasz modul zostal zbudowany zgodnie z najnowszymi standardami UX/UI. Jest szybki,
              intuicyjny i od razu swietnie wyglada na urządzeniach mobilnych.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:w-1/2">
            {userFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-white/5 bg-black/20 p-6">
                  <Icon className="h-5 w-5 mb-4 text-emerald-400/70" />
                  <h4 className="font-semibold text-emerald-300">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jak to dziala (Wdrozenie) */}
      <section>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Blyskawiczne wdrozenie
          </h3>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Od pierwszego kontaktu do dzialajacego marketplace&apos;u na Twojej stronie dziela Cie
            tylko trzy proste kroki.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3 relative">
          <div className="hidden sm:block absolute top-8 left-[16%] right-[16%] h-px bg-linear-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />
          
          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-zinc-950 text-xl font-bold text-emerald-300">
              1
            </div>
            <h4 className="mt-6 text-lg font-semibold text-white">Kontakt i Umowa</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 px-4">
              Porozmawiajmy o Twoich potrzebach. Weryfikujemy Twoj serwis i podpisujemy prosta, bezterminowa umowe partnerska.
            </p>
          </div>

          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-zinc-950 text-xl font-bold text-emerald-300">
              2
            </div>
            <h4 className="mt-6 text-lg font-semibold text-white">Integracja widgetu</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 px-4">
              Dostajesz od nas gotowy fragment kodu (HTML/JS). Wklejasz go w wybranym miejscu na stronie glownej lub w artykulach.
            </p>
          </div>

          <div className="relative text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-zinc-950 text-xl font-bold text-emerald-300">
              3
            </div>
            <h4 className="mt-6 text-lg font-semibold text-white">Publikacja i zyski</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 px-4">
              Twoi czytelnicy zaczynaja dodawac oferty. Ty sledzisz wzrost zaangazowania i prowizje w dedykowanym panelu partnera.
            </p>
          </div>
        </div>
      </section>

      {/* Krótkie FAQ */}
      <section className="mx-auto max-w-3xl">
        <h3 className="mb-8 text-2xl font-semibold tracking-tight text-white text-center">
          Pytania, ktore czesto slyszymy
        </h3>
        <div className="space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/3 px-6 py-4 open:bg-white/5">
            <summary className="cursor-pointer list-none font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden flex justify-between items-center">
              Czy naprawde nie potrzebuje programisty?
              <span className="text-zinc-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Tak. Caly skomplikowany kod dziala na naszych serwerach (SaaS). Jedyne, co musisz zrobic, to wkleic krotki skrypt na swoja strone — dokladnie tak samo, jak wklejasz kod Google Analytics czy widget YouTube.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/3 px-6 py-4 open:bg-white/5">
            <summary className="cursor-pointer list-none font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden flex justify-between items-center">
              Jak wyglada model rozliczen?
              <span className="text-zinc-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Zamiast ponosic stale koszty utrzymania serwerow, dzielimy sie zyskiem. Twoi uzytkownicy placa za promowanie ogloszen, a prowizja trafia do Ciebie. W ten sposob narzedzie zarabia samo na siebie i na Ciebie.
            </p>
          </details>
          <details className="group rounded-2xl border border-white/10 bg-white/3 px-6 py-4 open:bg-white/5">
            <summary className="cursor-pointer list-none font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden flex justify-between items-center">
              Czy moge dopasowac wyglad modulu do mojej strony?
              <span className="text-zinc-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Oczywiscie. W panelu administracyjnym z latwoscia dostosujesz podstawowe kolory i style, aby widget sprowadzal sie spojnie z szata graficzna Twojego portalu.
            </p>
          </details>
        </div>
      </section>

      {/* Wezwanie do akcji (kierujace do formularza) */}
      <div className="text-center pb-8">
        <p className="text-lg font-medium text-white">
          Gotowy, aby poszerzyć ofertę swojego serwisu?
        </p>
        <ContactCtaButton
          data={{ source: "InformationalServicesProductContent CTA", subject: "Kontakt — OfferCloud Publisher" }}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-300 px-8 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
        >
          Przejdź do formularza kontaktowego poniżej
        </ContactCtaButton>
      </div>
    </div>
  );
}
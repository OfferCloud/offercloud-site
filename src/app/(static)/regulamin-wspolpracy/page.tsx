import type { Metadata } from "next";
import Link from "next/link";

import { NoCopy } from "@/components/no-copy";

const pageTitle = "Regulamin współpracy";

export const metadata: Metadata = {
  title: pageTitle,
  description:
    "Regulamin współpracy w ramach wdrożenia oraz utrzymania serwisu ogłoszeniowego OfferCloud.",
};

export default function CooperationTermsPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <section className="relative isolate border-b border-zinc-200 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_24%)]" />
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
            Regulamin współpracy w ramach wdrożenia oraz utrzymania modułu
            ogłoszeniowego OfferCloud&nbsp;Publisher
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <NoCopy className="space-y-10 text-zinc-800 dark:text-zinc-200">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 1 Postanowienia ogólne
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Niniejszy regulamin (dalej: „Regulamin”), określa warunki i
                zasady współpracy OfferCloud sp. z o.o. z Partnerem w zakresie
                wdrożenia i utrzymania oraz obsługi Serwisu ogłoszeniowego
                OfferCloud działającego w ramach portalu internetowego Partnera,
                warunki współpracy Stron w tym wysokość i zasady płatności
                prowizji należnej Partnerowi oraz zakres odpowiedzialności
                OfferCloud i Partnera.
              </li>
              <li className="list-decimal">
                Warunkiem podjęcia współpracy przez OfferCloud i Partnera jest
                rejestracja Partnera poprzez założenie konta w panelu OfferCloud
                oraz akceptacja oferty OfferCloud i postanowień niniejszego
                Regulaminu w formie dokumentowej, tj. w formie elektronicznej i
                zobowiązanie się do przestrzegania Regulaminu współpracy.
              </li>
              <li className="list-decimal">
                Poprzez akceptację Regulaminu przez Partnera dochodzi do
                zawarcia umowy o współpracy OfferCloud z Partnerem na warunkach
                określonych w Regulaminie.
              </li>
              <li className="list-decimal">
                Miejscem zawarcia umowy jest siedziba OfferCloud.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 2 Definicje
            </h2>
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              Terminom pisanym w niniejszym Regulaminie z wielkiej litery nadaje
              się znaczenie jak poniżej.
            </p>
            <ol className="space-y-4 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-[lower-alpha]">
                Regulamin – niniejszy dokument, dostępny również pod adresem{" "}
                <Link
                  href="https://offercloud.pl/regulamin-wspolpracy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://offercloud.pl/regulamin-wspolpracy/
                </Link>
                .
              </li>
              <li className="list-[lower-alpha]">
                OfferCloud – OfferCloud Sp. z o.o. z siedzibą w Lublinie ul.
                Bukszpanowa 4 lok. 3, 20-810 Lublin, zarejestrowaną przez Sąd
                Rejonowy Lublin-Wschód w Lublinie z siedzibą w Świdniku, VI
                Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem
                KRS: 0000856744, REGON: 386846048, NIP: 9462699513.
              </li>
              <li className="list-[lower-alpha]">
                Partner – właściciel serwisu internetowego, prowadzący
                działalność gospodarczą w formie dopuszczonej przepisami prawa
                polskiego, zawierający z OfferCloud umowę współpracy w zakresie
                wdrożenia i utrzymania Serwisu ogłoszeniowego w ramach serwisu
                internetowego Partnera.
              </li>
              <li className="list-[lower-alpha]">
                Strony – OfferCloud oraz Partner.
              </li>
              <li className="list-[lower-alpha]">
                Panel Klienta – indywidualne konto każdego Partnera tworzone w
                Panelu OfferCloud pod adresem{" "}
                <Link
                  href="https://panel.offercloud.pl/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://panel.offercloud.pl/
                </Link>
                , oznaczone indywidualną nazwą (loginem e-mail) i hasłem podanym
                przez Partnera w procesie rejestracji. Konto stanowi zbiór
                zasobów w systemie teleinformatycznym OfferCloud, w którym
                gromadzone są dane o Partnerze, w tym dane dotyczące nazwy
                (firmy) Partnera, siedziby Partnera lub stałego miejsca
                wykonywania działalności gospodarczej, numeru NIP, numeru REGON,
                numeru KRS, adresu poczty elektronicznej, na który mają być
                doręczane powiadomienia i korespondencja dotycząca realizacji
                Umowy.
              </li>
              <li className="list-[lower-alpha]">
                Umowa – należy przez to rozumieć umowę o współpracy OfferCloud z
                Partnerem zawartą w formie dokumentowej na skutek zaakceptowania
                przez Partnera postanowień niniejszego Regulaminu oraz wskazaniu
                danych w zakresie: nazwy (firmy) Partnera, formy prawnej,
                siedziby Partnera lub stałego miejsca wykonywania działalności
                gospodarczej, numeru NIP, REGON oraz numeru KRS (w przypadku
                spółek prawa handlowego). Oferta OfferCloud i warunki współpracy
                Stron określone w niniejszym Regulaminie nie mogą zostać
                zaakceptowane przez Partnera z zastrzeżeniem jakichkolwiek zmian
                lub pod warunkiem. Przyjęcie oferty OfferCloud dokonane z
                zastrzeżeniem zmiany lub uzupełnienia jej treści jest
                nieskuteczne.
              </li>
              <li className="list-[lower-alpha]">
                Cennik – wykaz opłat, stosowanych przez OfferCloud w ramach
                płatności za usługi świadczone w Serwisie ogłoszeniowym
                OfferCloud, do uiszczenia których zobowiązany jest użytkownik
                oferujący Towary i zamieszczający ogłoszenie w Serwisie
                OfferCloud. Warunkiem skorzystania przez użytkowników
                oferujących towary z usług Serwisu OfferCloud jest uprzednie
                uiszczenie opłaty w określonej wysokości. W ramach Cennika
                uwzględniane są opłaty jednostkowe za usługi świadczone przez
                OfferCloud za pośrednictwem Serwisu ogłoszeniowego takie jak:
                udostępnienie narzędzi do tworzenia ogłoszenia, publikacja
                ogłoszenia w Serwisie, promowanie ogłoszenia w Serwisie.
              </li>
              <li className="list-[lower-alpha]">
                Serwis – lokalna platforma ogłoszeniowa funkcjonująca jako
                Moduł, stworzona i utrzymywana przez OfferCloud jako
                administratora, świadcząca na rzecz jej użytkowników usługi
                drogą elektroniczną, umożliwiająca użytkownikom zawieranie umów,
                poprzez zapewnienie możliwości zamieszczania ogłoszeń, ich
                publikacji i wyróżnienia a także wzajemnej komunikacji
                użytkowników.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 3 Zasady współpracy
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Celem Serwisu OfferCloud jest umożliwienie użytkownikom Serwisu
                zawierania umów, poprzez zapewnienie możliwości zamieszczania
                ogłoszeń w Serwisie, ich publikacji i wyróżnienia a także
                wzajemnej komunikacji użytkowników Serwisu.
              </li>
              <li className="list-decimal">
                W ramach Umowy o współpracy zawartej pomiędzy OfferCloud a
                Partnerem, Partner wyraża zgodę na nieodpłatne umieszczenie
                Serwisu ogłoszeniowego OfferCloud w ramach portalu internetowego
                Partnera.
              </li>
              <li className="list-decimal">
                OfferCloud zapewnia wdrożenie i bieżące utrzymanie Serwisu
                ogłoszeniowego OfferCloud w ramach modułu osadzonego na portalu
                internetowym Partnera.
              </li>
              <li className="list-decimal">
                OfferCloud zapewnia pełną obsługę płatniczo-księgową związaną z
                rozliczeniem transakcji dokonywanych w ramach Serwisu
                ogłoszeniowego za: udostępnienie narzędzi do tworzenia przez
                użytkowników ogłoszeń w Serwisie, publikacji ogłoszeń w Serwisie
                oraz ich promowania.
              </li>
              <li className="list-decimal">
                Partner zapewnia OfferCloud wyłączną możliwość umieszczenia na
                stronie internetowej Partnera Serwisu ogłoszeniowego o zasadach
                działania tzw. marketplace.
              </li>
              <li className="list-decimal">
                W związku z umieszczeniem Serwisu ogłoszeniowego w ramach strony
                internetowej Partnera użytkownicy tej strony zyskują informację
                i dostęp do aktualnych ogłoszeń sprzedaży rzeczy ruchomych i
                nieruchomości, świadczenia usług czy ofert zamiany towarów, a
                także możliwość samodzielnego zamieszczania ogłoszeń w Serwisie.
              </li>
              <li className="list-decimal">
                Po utworzeniu konta w Panelu Klienta i zaakceptowaniu
                niniejszego Regulaminu Partner OfferCloud otrzymuje kod HTML,
                który umieszcza na swojej stronie internetowej. Kod HTML
                umieszczony na stronie internetowej Partnera zaczytuje z
                serwerów OfferCloud Serwis ogłoszeniowy OfferCloud, który jest
                wyświetlany bezpośrednio u Partnera na stronie internetowej jako
                element osadzenia.
              </li>
              <li className="list-decimal">
                Partner odpowiada za poprawne osadzenie Serwisu w ramach strony
                internetowej.
              </li>
              <li className="list-decimal">
                OfferCloud odpowiada za poprawność działania Serwisu w ramach
                strony internetowej Partnera pod warunkiem prawidłowego
                osadzenia przez Partnera Serwisu zgodnie z wytycznymi
                jakościowymi OfferCloud.
              </li>
              <li className="list-decimal">
                OfferCloud zapewnia bieżące utrzymanie oraz przeprowadzenie
                wszelkich czynności serwisowych wymaganych do poprawnego
                działania Serwisu ogłoszeniowego w ramach strony internetowej
                Partnera.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 4 Licencja
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                OfferCloud wskazuje, że Serwis, w tym jego wygląd, treść,
                zamieszczone logotypy i układ graficzny chronione są prawami
                autorskimi OfferCloud i stanowią utwór w rozumieniu Ustawy z
                dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych
                oraz chroniony innymi prawami własności intelektualnej, takimi
                jak prawo ochrony na znak towarowy. Powyższe nie dotyczy
                ogłoszeń zamieszczanych w Serwisie przez jego użytkowników.
              </li>
              <li className="list-decimal">
                W ramach niniejszej Umowy OfferCloud udziela Partnerowi
                nieprzenaszalnej, licencji niewyłącznej, ograniczonej
                terytorialnie do zakresu działania strony internetowej Partnera,
                na korzystanie z Serwisu jako Utworu na następujących polach
                eksploatacji:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    wprowadzanie Serwisu, jak i jego części do pamięci ogólnie
                    dostępnego komputera
                  </li>
                  <li className="list-[lower-alpha]">
                    publiczne wyświetlanie na stronie internetowej Partnera,
                    rozpowszechnianie Serwisu online, wyłącznie w wersji
                    elektronicznej w celach marketingowych i promocyjnych
                    Partnera,
                  </li>
                </ol>
              </li>
              <li className="list-decimal">
                Udzielenie licencji następuje nieodpłatnie. Licencja nie
                obejmuje prawa do udzielania dalszej licencji bądź udostępniania
                Serwisu jako utworu do ponownego wykorzystania przez osoby
                trzecie.
              </li>
              <li className="list-decimal">
                Licencja zostaje udzielona na czas trwania Umowy o współpracy.
                Rozwiązanie umowy o współpracy skutkuje rozwiązaniem umowy
                licencji do Serwisu.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 5 Czas trwania współpracy
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Umowa o współpracy jest zawierana na czas nieokreślony.
              </li>
              <li className="list-decimal">
                Umowa o współpracy może zostać wypowiedziana przez Partnera oraz
                OfferCloud z zachowaniem jedno miesięcznego okresu wypowiedzenia
                ze skutkiem na koniec miesiąca kalendarzowego w którym upływa
                okres wypowiedzenia.
              </li>
              <li className="list-decimal">
                Oświadczenie o wypowiedzenie umowy podpisane zgodnie z zasadami
                reprezentacji przez Partnera lub OfferCloud przesyłane będzie
                drogą elektroniczną odpowiednio na adres poczty elektronicznej
                Partnera wskazaney w Panelu Klienta lub adres poczty
                elektronicznej OfferCloud:{" "}
                <span className="whitespace-nowrap">kontakt@offercloud.pl</span>
              </li>
              <li className="list-decimal">
                OfferCloud ma prawo rozwiązania Umowy zawartej z Partnerem w
                każdym czasie, bez zachowania okresu wypowiedzenia w przypadku
                naruszenia przez Partnera postanowień Regulaminu lub
                obowiązujących przepisów prawa. Wypowiedzenie Umowy w tym trybie
                poprzedzone zostanie pisemnym powiadomieniem skierowanym do
                Partnera za pośrednictwem poczty elektronicznej na adres e-mail
                Partnera podany w Panelu Klienta.
              </li>
              <li className="list-decimal">
                Rozwiązanie Umowy skutkuje usunięciem Serwisu z portalu
                internetowego Partnera z upływem ostatniego dnia okresu
                wypowiedzenia, a przypadku rozwiązania Umowy bez zachowania
                okresu wypowiedzenia z dniem wskazanym przez OfferCloud w
                oświadczeniu o rozwiązaniu Umowy bez zachowania okresu
                wypowiedzenia.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 6 Prowizja i zasady rozliczenia
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Usługa OfferCloud świadczona za pośrednictwem Serwisu na rzecz
                użytkowników oferujących towary, polegająca na umożliwieniu
                tworzenia i publikacji ogłoszeń w Serwisie oraz promowaniu
                ogłoszeń jest płatna.
              </li>
              <li className="list-decimal">
                Wysokość opłaty jest uzależniona od rodzaju i zakresu usług
                świadczonych przez OfferCloud na rzecz użytkowników Serwisu i
                jest wskazana w Cenniku dostępnym pod adresem{" "}
                <Link
                  href="https://offercloud.pl/publisher-cennik/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://offercloud.pl/publisher-cennik/
                </Link>
                .
              </li>
              <li className="list-decimal">
                Płatność za usługi dokonywana jest przez użytkowników Serwisu za
                pośrednictwem dostawców usług płatniczych. Uiszczone przez
                użytkowników Serwisu opłaty przelewane są w całości na konto
                OfferCloud.
              </li>
              <li className="list-decimal">
                Z tytułu współpracy Partnera z OfferCloud, w ramach której
                Partner wyraża zgodę na nieodpłatne osadzenie Serwisu
                ogłoszeniowego na stronie internetowej Partnera Partner nabywa
                prawo do prowizji od wszystkich opłat uiszczonych na rzecz
                OfferCloud przez użytkowników oferujących towary za
                pośrednictwem Serwisu osadzonego na stronie internetowej
                Partnera.
              </li>
              <li className="list-decimal">
                Bazowa prowizja wynosi 25% sumy netto tych opłat. Indywidualna
                prowizja w wysokości przekraczającej prowizję bazową może zostać
                ustalona w drodze odrębnego porozumienia Stron.
              </li>
              <li className="list-decimal">
                Prowizja rozliczana jest w okresach miesięcznych i obliczana
                jest w odniesieniu do sumy opłat uiszczonych na rzecz OfferCloud
                przez użytkowników oferujących towary za pośrednictwem Serwisu
                osadzonego na stronie internetowej Partnera w każdym miesiącu
                kalendarzowym trwania Umowy o współpracy, z zastrzeżeniem, że
                prowizja naliczana jest wyłącznie od transakcji dokonanych przez
                tych użytkowników oferujących towary, którzy dodali ogłoszenie
                za pośrednictwem Serwisu osadzonego na portalu internetowym
                Partnera. Prowizja nie jest naliczana od transakcji
                użytkowników, którzy dodali ogłoszenie za pośrednictwem Serwisu
                osadzonego na stronach internetowych innych podmiotów, pomimo że
                ogłoszenie takie wyświetlane jest również w Module osadzonym na
                stronie internetowej Partnera.
              </li>
              <li className="list-decimal">
                OfferCloud w terminie do 7 dni od daty zakończenia miesiąca
                kalendarzowego w Panelu Klienta zamieszcza zestawienie
                wskazujące:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    wszystkie transakcje i opłaty uiszczone przy użyciu
                    Modułu/Serwisu powiązanego z Partnerem na rzecz OfferCloud
                    przez użytkowników Serwisu w ramach usług Serwisu na ich
                    rzecz w zakresie tworzenia i publikacji ogłoszeń w Serwisie
                    oraz promowaniu ogłoszeń.
                  </li>
                  <li className="list-[lower-alpha]">
                    wysokość prowizji należnej Partnerowi.
                  </li>
                </ol>
              </li>
              <li className="list-decimal">
                Kwota prowizji należnej Partnerowi wskazywana jest zawsze jako
                kwota netto.
              </li>
              <li className="list-decimal">
                Na podstawie zamieszczonego przez OfferCloud zestawienia Partner
                wystawia fakturę VAT na kwotę należnej Partnerowi prowizji. Do
                kwoty tej doliczony zostaje każdorazowo podatek VAT zgodnie z
                obowiązującą stawką.
              </li>
              <li className="list-decimal">
                Działając na podstawie Ustawy z dnia 11 marca 2004 r. o podatku
                od towarów i usług (Dz. U. z 2017 poz. 1221, z późn. zm.) art.
                106n OfferCloud wyraża zgodę na przesyłanie przez Partnera
                faktur, duplikatów tych faktur oraz ich korekt, w formie
                elektronicznej przez Partnera. Faktury należy przesyłać na adres{" "}
                <span className="whitespace-nowrap">kontakt@offercloud.pl</span>{" "}
                lub za pośrednictwem dedykowanego narzędzia w Panelu Klienta.
              </li>
              <li className="list-decimal">
                Zapłata prowizji należnej Partnerowi następować będzie w
                terminie 30 dni od daty doręczenia OfferCloud faktury
                wystawionej przez Partnera, na adres poczty elektronicznej lub
                poprzez narzędzie wskazane w ust. 10 powyżej.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 7 Wsparcie techniczne
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                OfferCloud zapewnia bieżące utrzymanie Serwisu, w tym
                dokonywanie wszystkich czynności technicznych niezbędnych do
                prawidłowego działania Serwisu pod warunkiem spełnienia przez
                Partnera wymagań jakościowych, o których mowa w §2 ust. 9.
              </li>
              <li className="list-decimal">
                Zgłoszenia nieprawidłowości w działaniu Serwisu należy dokonywać
                drogą mailową na adres:{" "}
                <span className="whitespace-nowrap">support@offercloud.pl</span>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 8 Poufność
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                OfferCloud oraz Partner zobowiązują się zachować w tajemnicy
                wszelkie informacje techniczne, technologiczne, ekonomiczne,
                finansowe, handlowe, prawne i organizacyjne, dotyczące drugiej
                Strony – uzyskane w związku z realizacją Umowy o współpracy,
                niezależnie od formy przekazania tych informacji i ich źródła
                („Informacje poufne”).
              </li>
              <li className="list-decimal">
                Strony zobowiązują się:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    wykorzystywać ww. informacje jedynie w celach realizacji
                    Umowy współpracy;
                  </li>
                  <li className="list-[lower-alpha]">
                    podjąć wszelkie niezbędne kroki dla zapewnienia, że żadna z
                    osób otrzymujących Informacje Poufne nie ujawni tych
                    informacji, ani ich źródła, zarówno w całości, jak i w
                    części stronom trzecim bez uzyskania uprzedniego wyraźnego
                    upoważnienia na piśmie od Strony, której informacja lub
                    źródło informacji dotyczy;
                  </li>
                  <li className="list-[lower-alpha]">
                    nie kopiować, nie powielać ani w jakikolwiek sposób nie
                    rozpowszechniać jakichkolwiek części informacji poufnych z
                    wyjątkiem uzasadnionej potrzeby: tj. na potrzeby rozliczeń
                    księgowo-podatkowych, a także dochodzenia lub obrony przed
                    roszczeniami prawnymi drugiej Strony.
                  </li>
                </ol>
              </li>
              <li className="list-decimal">
                Obowiązki Stron wynikające z ust. 1-2 znajdują zastosowanie
                także wobec pracowników, podwykonawców, konsultantów,
                reprezentantów i kontrahentów Stron oraz innych osób mających
                dostęp do informacji przekazanych drugiej Stronie w związku z
                wykonaniem Umowy.
              </li>
              <li className="list-decimal">
                Postanowienia ust. 1-2 nie będą miały zastosowania w stosunku do
                tych informacji poufnych uzyskanych od drugiej Strony, które:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    są opublikowane, znane i urzędowo podane do publicznej
                    wiadomości bez naruszenia postanowień niniejszego paragrafu;
                  </li>
                  <li className="list-[lower-alpha]">
                    zostały przekazane przez osobę trzecią, bez naruszenia
                    jakichkolwiek zobowiązań o nie ujawnianiu w stosunku do
                    Stron;
                  </li>
                  <li className="list-[lower-alpha]">
                    zostały ujawnione osobie trzeciej na mocy bezwzględnie
                    obowiązujących przepisów prawa lub orzeczenia sądu;
                  </li>
                  <li className="list-[lower-alpha]">
                    zostaną podane przez jedną ze stron za uprzednią pisemną
                    zgodą drugiej Strony.
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 9 Ochrona danych osobowych
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                OfferCloud oraz Partner zobowiązują się do ochrony danych
                osobowych udostępnianych wzajemnie w związku z wykonaniem Umowy
                o współpracy, stosując w tym celu środki
                organizacyjno-techniczne, o których mowa w art. 32
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (ogólne rozporządzenie o ochronie danych) (dalej „RODO”), a
                także inne powszechnie obowiązujące przepisy prawa unijnego i
                krajowego chroniące prawa osób, których dane dotyczą.
              </li>
              <li className="list-decimal">
                OfferCloud oraz Partner oświadczają, że ich pracownicy,
                współpracownicy lub inne osoby posiadające dostęp do danych
                osobowych przedstawicieli drugiej Strony (w tym danych
                kontaktowych) znają przepisy dotyczące ochrony danych osobowych,
                działają na podstawie polecenia administratora danych (art. 29
                RODO) lub imiennego upoważnienia uprawniającego do przetwarzania
                danych osobowych w tym zakresie, a także zobowiązane są do
                zachowania w tajemnicy informacji prawnie chronionych.
              </li>
              <li className="list-decimal">
                OfferCloud dopełnia obowiązku informacyjnego, o którym mowa w
                art. 14 ust. 1-2 RODO wobec osób fizycznych, wykorzystując
                odpowiednio wzór klauzuli informacyjnej stanowiący Załącznik do
                niniejszego Regulaminu.
              </li>
              <li className="list-decimal">
                Za realizację zadań, o których mowa w art. 39 RODO z
                uwzględnieniem art. 38 ust. 6 RODO po stronie OfferCloud
                odpowiada Inspektor Ochrony Danych, email:{" "}
                <span className="whitespace-nowrap">kontakt@offercloud.pl</span>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 10 Postanowienia końcowe
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                W sprawach nieuregulowanych w niniejszym Regulaminie mają
                zastosowanie przepisy prawa polskiego, w szczególności: Kodeksu
                cywilnego.
              </li>
              <li className="list-decimal">
                Postanowienia niniejszego Regulaminu i zawartej na jego
                podstawie Umowy o współpracy są interpretowane według prawa
                polskiego.
              </li>
              <li className="list-decimal">
                Wszelkie spory mogące wyniknąć z zawartej przez Strony Umowy o
                współpracy rozstrzygać będzie sąd właściwy dla siedziby
                OfferCloud.
              </li>
              <li className="list-decimal">
                Regulamin obowiązuje od dnia 01.08.2022 r.
              </li>
            </ol>
          </div>
        </NoCopy>
      </section>
    </div>
  );
}

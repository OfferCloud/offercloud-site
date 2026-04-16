import type { Metadata } from "next";
import Link from "next/link";

import { NoCopy } from "@/components/no-copy";

const pageTitle = "Regulamin Marketplace";

export const metadata: Metadata = {
  title: pageTitle,
  description:
    "Regulamin platformy ogłoszeniowej OfferCloud Marketplace dla użytkowników serwisu.",
};

export default function MarketplaceRegulationsPage() {
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
            Regulamin platformy ogłoszeniowej OfferCloud&nbsp;Publisher
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
                Niniejszy regulamin (dalej: „Regulamin”), określa warunki,
                zasady oraz sposób świadczenia usług drogą elektroniczną, za
                pośrednictwem serwisu internetowego działającego pod nazwą
                OfferCloud Marketplace (dalej: „Serwis”), będącego lokalną
                platformą ogłoszeniową oraz warunki i zasady korzystania z usług
                przez Użytkowników Serwisu, w szczególności zasady i tryb
                zamieszczania w Serwisie Ogłoszeń oraz zasady kontaktu
                Użytkowników Serwisu.
              </li>
              <li className="list-decimal">
                Usługi świadczone za pośrednictwem Serwisu dostarczane są przez
                OfferCloud Sp. z o.o. (zwaną dalej „Administratorem”), z
                siedzibą w Lublinie ul. Bukszpanowa 4 lok. 3, 20-810 Lublin, z
                arejestrowaną przez Sąd Rejonowy Lublin-Wschód w Lublinie z
                siedzibą w Świdniku, VI Wydział Gospodarczy Krajowego Rejestru
                Sądowego, podnumerem KRS: 0000856744, REGON: 386846048, NIP:
                9462699513.
              </li>
              <li className="list-decimal">
                Celem Serwisu jest umożliwienie Użytkownikom Serwisu zawierania
                umów, poprzez zapewnienie możliwości zamieszczania Ogłoszeń w
                Serwisie, ich publikacji i wyróżnienia a także wzajemnej
                komunikacji Użytkowników.
              </li>
              <li className="list-decimal">
                Warunkiem skorzystania z Usług świadczonych przez Serwis jest
                uprzednia akceptacja niniejszego Regulaminu. Akceptując
                Regulamin Użytkownik zobowiązuje się do przestrzegania jego
                postanowień, a także do korzystania z Serwisu zgodnie z jego
                przeznaczeniem, obowiązującymi przepisami prawa, dobrymi
                obyczajami oraz zasadami współżycia społecznego.
              </li>
              <li className="list-decimal">
                Kontakt z Administratorem jest możliwy za pośrednictwem:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    poczty elektronicznej – pod adresem:{" "}
                    <span className="whitespace-nowrap">
                      kontakt@offercloud.pl
                    </span>
                  </li>
                  <li className="list-[lower-alpha]">
                    poczty tradycyjnej – pod adresem: 20-810 Lublin, ul.
                    Bukszpanowa 4 lok. 3
                  </li>
                </ol>
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
                <strong>Cennik</strong> – wykaz opłat, stosowanych przez
                Administratora w ramach płatności za Usługi, do uiszczenia
                których zobowiązany jest Użytkownik oferujący Towary i
                zamieszczający ogłoszenie w Serwisie. Aktualny cennik usług oraz
                zasady płatności dostępne są pod adresem{" "}
                <Link
                  href="https://offercloud.pl/publisher-cennik/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://offercloud.pl/publisher-cennik/
                </Link>
                . Warunkiem skorzystania przez Użytkownika oferującego Towary z
                Usług Serwisu jest uiszczenie opłaty w określonej wysokości.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Opłata</strong> – opłata za Usługi Administratora
                świadczone za pośrednictwem Serwisu takie jak: udostępnienie
                narzędzi do tworzenia Ogłoszenia, publikacja Ogłoszenia w
                Serwisie, promowanie Ogłoszenia w Serwisie.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Użytkownik</strong> – każda osoba fizyczna posiadająca
                pełną zdolność do czynności prawnych, a w wypadkach określonych
                przepisami prawa także osoba fizyczna posiadająca ograniczoną
                zdolność do czynności prawnych, osoba fizyczna prowadząca
                działalność gospodarczą, osoba prawna a także jednostka
                organizacyjna nieposiadająca osobowości prawnej, korzystająca z
                Usług świadczonych przez Administratora za pośrednictwem
                Serwisu. Warunkiem skorzystania z Usług Administratora
                świadczonych w ramach Serwisu jest uprzednia akceptacja
                Regulaminu.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Użytkownik nabywający</strong> – Użytkownik korzystający
                z bezpłatnych usług świadczonych przez Administratora za
                pośrednictwem Serwisu w zakresie możliwości wyszukiwania w
                Serwisie Ogłoszeń (ofert sprzedaży nieruchomości, ruchomości,
                praw majątkowych lub świadczenia usług) oraz komunikacji z
                Użytkownikami oferującymi Towary.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Użytkownik oferujący</strong> – Użytkownik korzystający
                z płatnych Usług świadczonych przez Administratora za
                pośrednictwem Serwisu w zakresie funkcjonalności polegających na
                tworzeniu Ogłoszenia, jego publikacji, prezentacji oraz
                ewentualnemu promowaniu a także zapewnieniu możliwości
                komunikacji z Użytkownikami nabywającymi.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Konsument</strong> – osoba fizyczna posiadająca pełną
                zdolność do czynności prawnych, która jako Użytkownik nabywający
                Towary dokonuje z Użytkownikiem oferującym czynności prawnej
                niezwiązanej bezpośrednio z jej działalnością gospodarczą lub
                zawodową.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Przedsiębiorca</strong> – osoba fizyczna, osoba prawna
                lub jednostka organizacyjna nieposiadająca osobowości prawnej,
                której przepisy szczególne przyznają zdolność prawną, prowadząca
                we własnym imieniu działalność gospodarczą lub zawodową.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Przedsiębiorca na prawach Konsumenta</strong> – osoba
                fizyczna prowadząca we własnym imieniu działalność gospodarczą
                lub zawodową, która zawiera z Użytkownikiem oferującym Towary
                Umowę bezpośrednio związaną z jej działalnością gospodarczą,
                nieposiadającą jednak dla tej osoby charakteru zawodowego,
                wynikającego w szczególności z przedmiotu wykonywanej przez nią
                działalności gospodarczej.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Ogłoszenie</strong> – informacje oraz materiały (w tym
                zdjęcia) zamieszczane przez Użytkownika – oferującego, opisujące
                nieruchomość, rzecz, prawo majątkowe lub usługę oferowaną przez
                Użytkownika, inne istotne informacje na temat towaru czy warunki
                wykonania usługi, cenę lub wynagrodzenie za usługę, warunki
                złożenia zamówienia, jak również odbioru Towaru (albo jego
                dostawę) wraz kosztem.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Ogłoszenie Wyróżnione</strong> – Ogłoszenie wyróżnione w
                Serwisie na tle innych Ogłoszeń umieszczonych w Serwisie za
                odrębną Opłatą, której wysokość jest każdorazowo uzależniona od
                kategorii w której Ogłoszenie jest publikowane, rodzaju i
                sposobu wyróżnienia (promowania) Ogłoszenia oraz czasu trwania
                wyróżnienia Ogłoszenia w Serwisie.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Towar</strong> – oferowana przez Użytkownika,
                nieruchomość, rzecz ruchoma (nowa lub używana), prawo majątkowe
                bądź usługa, stanowiąca przedmiot Ogłoszenia.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Regulamin</strong> – niniejszy Regulamin, o którym mowa
                w art. 8 ustawy z dnia 18 lipca 2002 roku o świadczeniu usług
                drogą elektroniczną (Dz.U. z 2017 r. poz. 1219), określający
                zasady świadczenia usług przez Administratora za pośrednictwem
                Serwisu. Regulamin udostępniony jest nieodpłatnie w sposób
                umożliwiający jego pozyskanie, odtwarzanie i utrwalanie treści
                za pomocą systemu teleinformatycznego.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Usługa</strong> – usługa/usługi świadczone przez
                Administratora drogą elektroniczną w postaci: umożliwienia
                Użytkownikom tworzenia i zamieszczania Ogłoszeń w Serwisie,
                umożliwienia Użytkownikom opcji zawarcia umowy sprzedaży, umowy
                o świadczenie usług bądź innej umowy o charakterze
                cywilnoprawnym z Użytkownikiem, który odpowie na jego
                Ogłoszenie, zamieszczaniu i wyróżnieniu Ogłoszeń, utrzymywania
                platformy do kontaktów Użytkowników, umożliwienie korzystania z
                innych funkcji dostępnych w Serwisie.
              </li>
              <li className="list-[lower-alpha]">
                <strong>Polityka Prywatności</strong> – dokument regulujący
                bezpieczeństwo ochrony prywatności i przetwarzania danych
                osobowych Użytkowników, zawierający informacje o zakresie, celu
                i zasadach przetwarzania danych osobowych Użytkowników przez
                Administratora. Polityka Prywatności jest dostępna pod adresem{" "}
                <Link
                  href="https://offercloud.pl/polityka-prywatnosci"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://offercloud.pl/polityka-prywatnosci
                </Link>
                .
              </li>
              <li className="list-[lower-alpha]">
                <strong>Umowa</strong> – umowa o świadczenie Usług zawarta
                pomiędzy Administratorem a Użytkownikiem, której ogólne
                postanowienia określa niniejszy Regulamin.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 3 Wymagania techniczne
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Do korzystania z Serwisu, w tym przeglądania jego zasobów,
                dodawania Ogłoszeń oraz kontaktu z innymi Użytkownikami
                niezbędne są łącznie:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    połączenie z siecią Internet;
                  </li>
                  <li className="list-[lower-alpha]">
                    posiadanie urządzenia pozwalającego na korzystanie z sieci
                    Internet;
                  </li>
                  <li className="list-[lower-alpha]">
                    korzystanie z przeglądarki internetowej umożliwiającej
                    wyświetlanie dokumentów hipertekstowych powiązanych w sieci
                    Internet przez sieciową usługę WWW,
                  </li>
                  <li className="list-[lower-alpha]">
                    włączona obsługa plików cookies,
                  </li>
                  <li className="list-[lower-alpha]">
                    korzystanie z przeglądarki internetowej obsługującej język
                    programowania JavaScript,
                  </li>
                  <li className="list-[lower-alpha]">
                    posiadanie aktywnego konta poczty elektronicznej – adresu
                    e-mail,
                  </li>
                  <li className="list-[lower-alpha]">
                    aktywny numer telefonu komórkowego,
                  </li>
                </ol>
              </li>
              <li className="list-decimal">
                Administrator stosuje środki organizacyjne i techniczne mające
                na celu uniemożliwienie dostępu osobom trzecim do danych
                Użytkowników, niemniej Administrator zaleca stosowanie przez
                Użytkowników programów antywirusowych lub środków chroniących
                identyfikację w sieci Internet.
              </li>
              <li className="list-decimal">
                Administrator nie ponosi odpowiedzialności za zakłócenia w tym
                przerwy w funkcjonowaniu Serwisu spowodowane siłą wyższą,
                niedozwolonym działaniem osób trzecich lub niezgodnością Serwisu
                z infrastrukturą techniczną Użytkownika.
              </li>
              <li className="list-decimal">
                Administrator dokłada wszelkich starań w celu zapewnienia
                prawidłowego i nieprzerwanego funkcjonowania Serwisu, jednakże
                zastrzega możliwość czasowego wstrzymania funkcjonalności
                Serwisu ze względów technicznych lub przyczyn niezależnych od
                Administratora.
              </li>
              <li className="list-decimal">
                W przypadku awarii technicznej Serwisu spowodowanej wystąpieniem
                błędu technicznego w funkcjonowaniu Serwisu, za który
                odpowiedzialność ponosi Administrator, w wyniku której
                Użytkownik nie może uzyskać dostępu do Serwisu i/lub nie może
                korzystać z funkcjonalności Serwisu (zamieszczanie Ogłoszeń,
                wyświetlanie, promowanie Ogłoszeń, komunikacja Użytkowników)
                Administrator przedłuża czas emisji Ogłoszeń aktywnych w czasie
                wystąpienia awarii technicznej. Czas przedłużenia wynosi
                odpowiednio: 24 godziny – w przypadku awarii technicznej
                trwającej powyżej 12 godzin do 24 godzin lub o czas trwania
                awarii technicznej – w przypadku awarii technicznej trwającej
                dłużej niż 24 godziny.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 4 Zasady korzystania z serwisu
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Użytkownik jest zobowiązany do korzystania z Serwisu w sposób
                zgodny z przepisami prawa powszechnie obowiązującego oraz
                postanowieniami Regulaminu.
              </li>
              <li className="list-decimal">
                Tworzenie i publikowanie Ogłoszeń przez Użytkowników oferujących
                nie wymaga zakładania konta w Serwisie.
              </li>
              <li className="list-decimal">
                Przeglądanie oraz wyszukiwanie Ogłoszeń w Serwisie przez
                Użytkowników nabywających nie wymaga zakładania konta w
                Serwisie.
              </li>
              <li className="list-decimal">
                Formularz kontaktowy dostępny w Serwisie umożliwia wyłącznie
                pierwszy inicjujący kontakt Użytkowników oraz wymianę informacji
                dotyczących preferowanej formy dalszej komunikacji, w tym
                wskazanie danych kontaktowych. Dalsza komunikacja Użytkowników
                odbywa się z pominięciem Serwisu w wybrany przez Użytkowników
                sposób (kontakt osobisty, telefoniczny, mailowy).
              </li>
              <li className="list-decimal">
                Użytkownikami oferującymi mogą być wyłącznie osoby fizyczne
                posiadające pełną zdolność do czynności prawnych (osoby które
                ukończyły 18 rok życia i nie zostały ubezwłasnowolnione
                częściowo lub całkowicie), osoby prawne oraz jednostki
                organizacyjne nieposiadające osobowości prawnej, którym ustawa
                przyznaje zdolność prawną.
              </li>
              <li className="list-decimal">
                Użytkownikami nabywającymi mogą być osoby fizyczne posiadające
                pełną zdolność do czynności prawnych, osoby prawne, jednostki
                organizacyjne nieposiadające osobowości prawnej, którym ustawa
                przyznaje zdolność prawną a także osoby fizyczne, które
                ukończyły 13 rok życia. Osoby, które ukończyły 13 rok życia, ale
                nie ukończyły 18 roku życia mogą korzystać z Serwisu i zawierać
                umowy z Użytkownikami oferującymi Towary w zakresie w jakim mogą
                one nabywać prawa i zaciągać zobowiązania zgodnie z przepisami
                obowiązującego prawa. Jeżeli przepisy obowiązującego prawa
                wymagają zgody opiekuna prawnego Użytkownika do zawarcia umowy,
                opiekun prawny musi wyrazić zgodę na jej zawarcie.
              </li>
              <li className="list-decimal">
                Utworzenie Ogłoszenia jest możliwe po uzupełnieniu przez
                Użytkownika oferującego wszystkich wymaganych pól interaktywnego
                formularza ogłoszenia, w tym po podaniu danych osobowych i
                adresowych umożliwiających zawarcie umowy przez Użytkowników.
                Użytkownik oferujący ma możliwość przypisania Ogłoszenia do
                odpowiednich kategorii oraz skorzystania z opcji wyróżnienia
                Ogłoszenia.
              </li>
              <li className="list-decimal">
                Zamieszczenie Ogłoszenia w Serwisie wymaga uprzedniej akceptacji
                Regulaminu oraz wyrażenia przez Użytkownika zgody na
                przetwarzanie danych osobowych Użytkownika przez Administratora
                a także ewentualnych innych zgód wymaganych Regulaminem a
                następnie potwierdzenie publikacji Ogłoszenia odpowiednim
                przyciskiem.
              </li>
              <li className="list-decimal">
                Ogłoszenia zamieszczane w Serwisie przez Użytkownika muszą być
                prawdziwe, nie mogą wprowadzać w błąd innych Użytkowników w
                szczególności co do istotnych cech Towaru i jego właściwości. W
                przypadku gdy Ogłoszenie zawiera zdjęcia – mogą one przedstawiać
                wyłącznie oferowany Towar.
              </li>
              <li className="list-decimal">
                Przedmiotem Ogłoszenia mogą być: nieruchomości, rzeczy ruchowe
                (nowe lub używane), prawa majątkowe a także usługi.
              </li>
              <li className="list-decimal">
                Ceny Towarów wskazywane w treści Ogłoszenia są zawsze cenami
                brutto. W przypadku zaoferowania przez Użytkownika oferującego
                Towary ich wysyłki jest on zobowiązany wskazać w treści
                Ogłoszenia możliwe formy wysyłki Towarów oraz ich cenę.
              </li>
              <li className="list-decimal">
                Użytkownik oferujący na etapie tworzenia Ogłoszenia jest
                obowiązany wskazać (poprzez zaznaczenie odpowiedniego pola
                formularza ogłoszenia) czy dokonuje sprzedaży (lub oferuje
                wykonanie usługi) jako osoba prywatna nieprowadząca działalności
                gospodarczej czy też działając jako Przedsiębiorca.
              </li>
              <li className="list-decimal">
                W przypadku zamieszczenia Ogłoszenia jako Przedsiębiorca
                Użytkownik zobowiązany jest wskazać w formularzu ogłoszenia
                także dane identyfikacyjne/ rejestrowe firmy Użytkownika, w tym
                numer NIP. W treści takiego Ogłoszenia zamieszczone zostaną
                informacje o objęciu Użytkowników nabywających Towar ochroną na
                mocy przepisów ustawy o ochronie praw konsumentów.
              </li>
              <li className="list-decimal">
                W przypadku zamieszczenia Ogłoszenia jako Przedsiębiorca osoba
                tworząca Ogłoszenie musi być należycie upoważniona do działania
                i dokonywania w ramach Serwisu wszelkich czynności imieniu i na
                rzecz takiego Użytkownika. Administrator ma prawo do dokonania
                dodatkowej weryfikacji takiej osoby poprzez żądanie dokumentu
                potwierdzającego umocowanie do działania w imieniu Użytkownika.
              </li>
              <li className="list-decimal">
                Obowiązkiem każdego Użytkownika jest podanie prawdziwych danych,
                zgodnych ze stanem faktycznym.
              </li>
              <li className="list-decimal">
                Administrator nie weryfikuje tożsamości Użytkowników i nie
                odpowiada za wiarygodność danych podawanych przez Użytkowników.
              </li>
              <li className="list-decimal">
                Wprowadzając do Serwisu w ramach Ogłoszeń jakiekolwiek materiały
                graficzne (także w formie zdjęć) Użytkownik gwarantuje, że
                materiały te nie naruszają praw osób trzecich a ich używanie i
                rozporządzanie tymi materiałami nie narusza praw osób trzecich.
              </li>
              <li className="list-decimal">
                Użytkownik zamieszczając w treści Ogłoszenia materiały
                stanowiące utwory w rozumieniu Ustawy z dnia 4 lutego 1994r. o
                prawie autorskim i prawach pokrewnych udziela Administratorowi
                nieograniczonej terytorialnie, niewyłącznej i nieodpłatnej
                licencji na czas nieokreślony na korzystanie i rozporządzanie
                nimi w części lub w całości, w zakresie niezbędnym do
                świadczenia usług przez Administratora, rozpowszechniania oraz
                promocji Serwisu, w tym opracowywania na ich podstawie utworów
                zależnych na następujących polach eksploatacji: w zakresie
                utrwalania i zwielokrotniania utworu – wytwarzanie określoną
                techniką egzemplarzy utworu, w tym techniką drukarską,
                reprograficzną, zapisu magnetycznego oraz techniką cyfrową; w
                zakresie obrotu oryginałem albo egzemplarzami, na których
                utrwalono utwór lub treści – wprowadzanie do obrotu, użyczenie
                lub najem oryginału albo egzemplarzy; w zakresie
                rozpowszechniania w inny sposób – publiczne wykonanie,
                wystawienie, wyświetlenie, odtworzenie oraz nadawanie i
                reemitowanie, a także publiczne udostępnianie utworu w taki
                sposób, aby każdy mógł mieć do nich dostęp w miejscu i w czasie
                przez siebie wybranym.
              </li>
              <li className="list-decimal">
                W przypadku gdy w stosunku do Administratora skierowane zostaną
                roszczenia mające związek z naruszeniem praw osób trzecich do
                utworów na skutek treści (zdjęć) zamieszczonych przez
                Użytkownika w Ogłoszeniu Użytkownik zwolni Administratora z
                jakiejkolwiek odpowiedzialności w tym zakresie a ponadto zwróci
                Administratorowi wszelkie koszty jakie Administrator poniósł w
                związku z takimi roszczeniami osób trzecich. W przypadku gdy
                przeciwko Administratorowi zostanie wszczęte postępowanie sądowe
                Użytkownik wstąpi do tego postępowania i zwróci Administratorowi
                poniesione w związku z nim koszty.
              </li>
              <li className="list-decimal">
                Zabronione jest zamieszczanie w treści Ogłoszenia danych
                osobowych oraz wizerunku osób trzecich – bez pisemnej zgody tych
                osób.
              </li>
              <li className="list-decimal">
                Zakazane jest:
                <ol className="mt-3 space-y-2 pl-5">
                  <li className="list-[lower-alpha]">
                    zamieszczanie w Ogłoszeniach treści o charakterze bezprawnym
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń nieprawdziwych (fikcyjnych) lub
                    wprowadzających w błąd
                  </li>
                  <li className="list-[lower-alpha]">
                    umieszczanie w treści Ogłoszeń słów powszechnie uznanych za
                    obraźliwe bądź naruszających dobra osobiste
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie w Ogłoszeniach treści, zdjęć, grafik i tym
                    podobnych, które naruszają prawa autorskie innych podmiotów
                  </li>
                  <li className="list-[lower-alpha]">
                    używanie w treści Ogłoszeń znaków towarowych innych
                    podmiotów bez wyraźnej, pisemnej zgody tych podmiotów
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń promujących inne serwisy internetowe
                    w szczególności serwisy aukcyjne lub ogłoszeniowe
                  </li>
                  <li className="list-[lower-alpha]">
                    tworzenie Ogłoszeń zawierających treści erotyczne,
                    ogłoszenia towarzyskie lub winny sposób niezgodne z
                    założeniami Serwisu
                  </li>
                  <li className="list-[lower-alpha]">
                    tworzenie Ogłoszeń o charakterze rasistowskim, nawołujących
                    do nienawiści, przemocy itp.
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń, w których publikowane zdjęcia nie
                    przedstawiają Towaru będącego przedmiotem Ogłoszenia
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń dotyczących sprzedaży/ oferowania:
                    papierosów, wyrobów tytoniowych, napojów alkoholowych,
                    narkotyków, środków odurzających i środków psychotropowych,
                    leków i produktów leczniczych, produktów zawierających
                    treści pornograficzne, materiałów wybuchowych, broni i
                    amunicji, oraz innych podobnych
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń dotyczących towarów podrabianych
                    (stanowiących naśladownictwo produktów w rozumieniu Ustawy z
                    dnia 16 kwietnia 1993r. o zwalczaniu nieuczciwej
                    konkurencji) oraz towarów naruszających prawa autorskie osób
                    trzecich
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń dotyczących Towarów co do których
                    obrót jest zabroniony bądź podlega regulacjom szczególnym
                    określonym w obowiązujących przepisach
                  </li>
                  <li className="list-[lower-alpha]">
                    zamieszczanie Ogłoszeń dotyczących sprzedaży towarów
                    pochodzących zkradzieży, rozboju lub innego przestępstwa
                  </li>
                  <li className="list-[lower-alpha]">
                    rozpowszechnianie niezamówionej informacji handlowej ani
                    innych tego rodzaju wiadomości (spam)
                  </li>
                  <li className="list-[lower-alpha]">
                    wprowadzanie (a także próby wprowadzania) do systemu
                    informatycznego Serwisu szkodliwych danych (w formie
                    złośliwego oprogramowania, wirusów, plików szpiegujących).
                  </li>
                </ol>
              </li>
              <li className="list-decimal">
                Każde Ogłoszenie zamieszczane w Serwisie może podlegać
                weryfikacji Administratora.
              </li>
              <li className="list-decimal">
                Administrator jest uprawniony do usuwania z Serwisu Ogłoszeń
                naruszających Regulamin lub obowiązujące przepisy prawa. W
                przypadku usunięcia Ogłoszenia Opłata pobrana przez
                Administratora za zamieszczenie Ogłoszenia w Serwisie (w tym
                Opłata za wyróżnienie Ogłoszenia) nie podlega zwrotowi.
              </li>
              <li className="list-decimal">
                Użytkownik oferujący poprzez zamieszczenie Ogłoszenia w Serwisie
                wyraża zgodę na publikację Ogłoszenia również w innych serwisach
                partnerskich. Przez serwisy partnerskie należy rozumieć inne
                serwisy ogłoszeniowe z którymi Administrator nawiązał współpracę
                w zakresie redystrybucji ogłoszeń. Z tytułu publikacji
                Ogłoszenia w innych serwisach Administratora Użytkownik nie jest
                zobowiązany do wnoszenia dodatkowych opłat.
              </li>
              <li className="list-decimal">
                Użytkownik oferujący zobowiązany jest do usunięcia Ogłoszenia z
                Serwisu w przypadku sprzedaży Towaru stanowiącego przedmiot
                Ogłoszenia/ wykonania usługi stanowiącej przedmiot Ogłoszenia a
                także w przypadku dezaktualizacji Ogłoszenia.
              </li>
              <li className="list-decimal">
                Administrator nie ponosi odpowiedzialności za treść Ogłoszeń, w
                szczególności za ich wiarygodność i prawdziwość.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 5 Opłaty
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Usługa Administratora świadczona za pośrednictwem Serwisu na
                rzecz Użytkowników oferujących, polegająca na umożliwieniu
                tworzenia i publikacji Ogłoszenia oraz promowaniu Ogłoszenia
                (Wyróżnione Ogłoszenie) jest płatna.
              </li>
              <li className="list-decimal">
                Wysokość Opłaty jest uzależniona od rodzaju i zakresu usług
                świadczonych przez Administratora na rzecz Użytkownika
                oferującego tj.: tworzenie i publikacja Ogłoszenia w ramach
                określonej kategorii w Serwisie, usługa wyróżnienia Ogłoszenia w
                Serwisie i stanowi sumę opłat jednostkowych za poszczególne
                usługi. Wysokość opłat jednostkowych składających się na Opłatę
                jest uzależniona od: a) kategorii w ramach której publikowane
                jest Ogłoszenie, b) czasu publikacji Ogłoszenia w Serwisie, c)
                rodzaju i zakresu usługi wyróżnienia Ogłoszenia w Serwisie, d)
                czasu trwania wyróżnienia Ogłoszenia w Serwisie. Opłata należna
                za dane Ogłoszenie zostaje wyświetlona Użytkownikowi po
                wypełnieniu wszystkich wymaganych pól formularza Ogłoszenia,
                dodaniu zdjęć Towaru, wyboru kategorii w której Ogłoszenie
                będzie publikowane oraz rodzaju, zakresu i czasu trwania
                Wyróżnienia Ogłoszenia. Wykaz aktualnych opłat, stosowanych
                przez Administratora w ramach płatności za Usługi, do uiszczenia
                których zobowiązany jest Użytkownik oferujący Towary i
                zamieszczający ogłoszenie w Serwisie oraz zasady i dostępne
                formy płatności znajdują się pod adresem{" "}
                <Link
                  href="https://offercloud.pl/publisher-cennik/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-600 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-700 dark:text-emerald-200 dark:decoration-emerald-300/40 dark:hover:text-emerald-100"
                >
                  https://offercloud.pl/publisher-cennik/
                </Link>
                . Użytkownik będzie informowany każdorazowo w Serwisie w
                widoczny sposób o opłatach jednostkowych za wybierane usługi.
              </li>
              <li className="list-decimal">
                Wszystkie opłaty jednostkowe oraz Opłata stanowiąca sumę opłat
                jednostkowych są cenami brutto (zawierają podatek od towarów i
                usług, tj. VAT) wyrażonymi w złotych polskich.
              </li>
              <li className="list-decimal">
                Warunkiem skorzystania przez Użytkownika oferującego Towary z
                Usług Serwisu jest uiszczenie Opłaty we wskazanej wysokości.
                Publikacja Ogłoszenia w Serwisie (rozpoczęcie świadczenia
                Usługi) jest możliwa dopiero po uiszczeniu Opłaty zgodnie z
                obowiązującym Cennikiem.
              </li>
              <li className="list-decimal">
                Użytkownik może dokonać płatności z wykorzystaniem jednej z
                dostępnych metod płatności zgodnie z informacjami wskazanymi w
                procesie wyboru danej usługi. Skorzystanie z którejkolwiek z
                metod płatności wymaga nawiązania odrębnego stosunku prawnego z
                dostawcą usługi płatniczej i zaakceptowania jego regulaminu.
                Administrator nie jest stroną takiego stosunku i nie ponosi
                odpowiedzialności za jego prawidłowe wykonanie. W przypadku
                wystąpienia problemów z płatnością Użytkownik powinien
                skontaktować się z bezpośrednio z operatorem świadczącym usługę
                płatniczą.
              </li>
              <li className="list-decimal">
                Korzystanie z Serwisu przez Użytkowników nabywających jest
                bezpłatne.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 6 Realizacja
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Ogłoszenia, które są publikowane w Serwisie nie stanowią oferty
                w rozumieniu art. 66 Kodeksu Cywilnego, a jedynie zaproszenie do
                zawarcia umowy w rozumieniu art. 71 Kodeksu Cywilnego.
              </li>
              <li className="list-decimal">
                Jeżeli w ramach danego Ogłoszenie Użytkownik nabywający prześle
                Użytkownikowi oferującemu zapytanie o Towar, w tym ofertę cenową
                poczytuje się, że doszło do zaproszenia do zawarcia umowy, które
                zostało skierowane do Użytkownika oferującego przez Użytkownika
                nabywającego.
              </li>
              <li className="list-decimal">
                Administrator nie jest stroną umów zawieranych pomiędzy
                Użytkownikami Serwisu.
              </li>
              <li className="list-decimal">
                Za prawidłowe wykonanie umowy odpowiadają Użytkownicy Serwisu.
                Administrator nie ponosi odpowiedzialności z tytułu niewykonania
                lub nienależytego wykonania umów zawartych przez Użytkowników.
              </li>
              <li className="list-decimal">
                Administrator nie pośredniczy w zawarciu ani w wykonaniu umów
                pomiędzy Użytkownikami Serwisu i nie ponosi z tego tytułu żadnej
                odpowiedzialności. Administrator nie ponosi także
                odpowiedzialności za wszelkie inne roszczenia mogące wyniknąć z
                zawartych umów – takich jak roszczenia z tytułu rękojmi, za
                utracone korzyści itp.
              </li>
              <li className="list-decimal">
                Administrator w ramach Serwisu umożliwia jedynie Użytkownikom
                tworzenie i publikację oraz promowanie i edytowanie Ogłoszeń
                oraz inicjującą komunikację Użytkowników w związku z
                prezentowanymi w Serwisie Ogłoszeniami.
              </li>
              <li className="list-decimal">
                Zapłata ceny/ wynagrodzenia za Towar następuje z pominięciem
                Serwisu i Administratora.
              </li>
              <li className="list-decimal">
                Użytkownik oferujący Towary będący Przedsiębiorcą jest
                zobowiązany do dopełnienia wszelkich formalności (w tym
                prawno-podatkowych) związanych z prowadzoną w ramach
                działalności gospodarczej sprzedażą towarów bądź świadczeniem
                usług.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 7 Postępowanie reklamacyjne
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Użytkownik ma prawo do złożenia reklamacji dotyczącej Serwisu,
                jego funkcjonalności w tym Usług świadczonych przez
                Administratora za pośrednictwem Serwis.
              </li>
              <li className="list-decimal">
                Zgłoszenie reklamacyjne powinno zawierać:
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>– dane osobowe Użytkownika</li>
                  <li>
                    – określenie zastrzeżeń i uwag w stosunku do Serwisu lub
                    Usług świadczonych przez Administratora
                  </li>
                </ul>
              </li>
              <li className="list-decimal">
                Reklamację należy kierować na adres wskazany w §1 ust. 5
                Regulaminu.
              </li>
              <li className="list-decimal">
                Jeśli reklamacja będzie wymagała uzupełnienia/ doprecyzowania
                Administrator skontaktuje się w tym celu z Użytkownikiem z
                prośbą o jej uzupełnienie/ poprawienie.
              </li>
              <li className="list-decimal">
                Administrator ustosunkuje się do reklamacji w terminie 14
                (czternastu) dni od dnia jej otrzymania, przesyłając odpowiedź
                na adres Użytkownika, który został podany przez Użytkownika w
                zgłoszeniu reklamacyjnym.
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              § 8 Postanowienia końcowe
            </h2>
            <ol className="space-y-3 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-8">
              <li className="list-decimal">
                Administrator wskazuje, że Serwis, w tym jego wygląd, treść i
                układ graficzny chronione są prawami autorskimi Administratora
                oraz innymi prawami własności intelektualnej, takimi jak prawo
                ochrony na znak towarowy. Powyższe nie dotyczy Ogłoszeń
                zamieszczanych w Serwisie przez Użytkowników. Zawarcie przez
                Użytkownika Umowy z Administratorem na świadczenie Usług w
                ramach Serwisu nie skutkuje przeniesieniem na Użytkownika
                jakichkolwiek praw autorskich należących do Administratora.
              </li>
              <li className="list-decimal">
                Informacje o przetwarzaniu danych osobowych przez Administratora
                znajdują się w Polityce prywatności.
              </li>
              <li className="list-decimal">
                Administrator zastrzega prawo do dokonywania zmiany wyglądu i
                funkcjonalności Serwisu, przy czym zmiany te nie mogą prowadzić
                do pogorszenia jakości Usług świadczonych przez Administratora.
              </li>
              <li className="list-decimal">
                Administrator zastrzega prawo do dokonywania zmian w treści
                Regulaminu. O każdej zmianie Regulaminu Administrator
                poinformuje w drodze publikacji zmienionej wersji Regulaminu w
                Serwisie z co najmniej 14 dniowym wyprzedzeniem przed dniem
                wejścia zmian w życie.
              </li>
              <li className="list-decimal">
                W sprawach nieuregulowanych w niniejszym Regulaminie mają
                zastosowanie przepisy prawa polskiego, w szczególności: Kodeksu
                cywilnego; ustawy o prawach konsumenta, ustawy o ochronie danych
                osobowych, ustawy o świadczeniu usług drogą elektroniczną
              </li>
              <li className="list-decimal">
                Aktualna wersja Regulaminu obowiązuje od dnia 01.08.2022 r.
              </li>
            </ol>
          </div>
        </NoCopy>
      </section>
    </div>
  );
}

# OfferCloud – model biznesowy i architektura produktu

Ten dokument stanowi bazę wiedzy o funkcjonowaniu OfferCloud, jego produktach i obietnicy wartości dla klientów. Posłuży do pisania copy na podstronach oraz do spójnej komunikacji. Będzie aktualizowany na podstawie uwag.

## Czym jest OfferCloud?

**OfferCloud Sp. z o.o.** jest **dostawcą oprogramowania**. Dostarcza platformę ofertową i marketplace w modelu SaaS. Główny cel to porządkowanie danych ofertowych oraz uproszczenie publikacji na różnych rynkach.

Po stronie klienta nie jest wymagany własny zespół IT ani ciężkie, ręczne integracje: hosting, utrzymanie i rozwój leżą po stronie OfferCloud. Interfejs trafia zwykle jako widgety lub kod osadzenia do serwisu partnera albo jako samodzielny niezależny serwis.

---

## Trzy produkty

Oferta komercyjna jest podzielona na **trzy nazwane produkty**, dopasowane do segmentu i sposobu wdrożenia: osadzenie w serwisie partnera, white-label marketplace lub dedykowana strona ofertowa.






### OfferCloud Publisher – marketplace dla wydawców i serwisów informacyjnych

**Dla kogo:** portale informacyjne, media lokalne i ogólnopolskie, serwisy społecznościowe i inne witryny, które chcą **budować zaangażowanie i nowe przychody wokół treści**, dokładając **lokalny rynek ogłoszeń** – bez budowy własnego backendu tablicy.

**Model rozliczeń:** dla partnera **bezpłatny** (wydawca zarabia prowizyjnie na usługach opłacanych przez użytkowników końcowych, zgodnie z modelem opisanym poniżej).

**Problem klienta:** utrzymanie zaangażowania i czasu na stronie, nowe źródło przychodu oraz **świeża, dynamiczna treść generowana przez użytkowników** – przy zerowym lub niewielkim zapleczu IT i bez utrzymania serwerów ogłoszeniowych.

**Propozycja wartości (jednym zdaniem):** gotowy moduł marketplace pod marką i domeną wydawcy: szybkie wdrożenie, niski koszt wejścia, monetyzacja usług dodanych do ogłoszeń, a technologia i operacja po stronie OfferCloud.

---

#### Funkcjonalności (produkt)

- **Interfejs ogłoszeniowy:** czytelny układ listy i oferty; funkcje pogrupowane tak, by były oczywiste dla użytkowników o różnym poziomie komfortu technicznego (dostępność percepcyjna jako przewaga nad przeładowanymi portalami ogłoszeniowymi).
- **Osadzenie w serwisie partnera (bez przekierowań):** moduł tablicy ogłoszeniowej jest umieszczany poprzez kod **JavaScript** w aktualnym szablonie wydawcy. Użytkownik korzysta z marketplace **bez opuszczania strony partnera** (ruch i doświadczenie pozostają w domenie wydawcy).
- **Dodawanie ogłoszeń z niską tarczą:** ścieżka **bez klasycznego konta i hasła** – tylko niezbędne pola i szybkie złożenie oferty - użytkownik zarządza ofertą na podstwie tokeny wysyłanego na adres email.
- **Kontakt kupujący ↔ sprzedający:** wiadomości w module oraz możliwość kontaktu poza systemem (np. telefon); **brak prowizji od transakcji** między użytkownikami – model opłacalności opiera się na usługach platformy (promocje itd.), nie na „podatku” od każdej sprzedaży.
- **Wyszukiwarka i filtry:** wyszukiwanie po tytule, cenie, lokalizacji, atrybutach kategorii – logiczne zawężanie wyników zamiast przewijania długiej listy.
- **Pakiety promowania ofert:** np. warianty **Mini / Midi / Maxi** – m.in. automatyczne odświeżanie przez określony czas, wyróżnienie na liście 
- **Widget i osadzenie:** gotowy fragment (HTML/JS) do wklejenia na stronie głównej lub w treściach – podgląd ostatnich ogłoszeń, wejście w pełny marketplace; partner decyduje o miejscu ekspozycji.
- **Rozproszona dystrybucja (ekosystem):** ogłoszenia mogą być współdzielone między marketplace’ami klientów OfferCloud, **jeśli spełniają kryteria kategorii i lokalizacji**. Partner może ograniczać zasięg i zakres marketplace (np. **wyłączyć kategorie** albo ustawić warunki terytorialne, takie jak **promień X km**). Efekt: **większy zasięg** dla wystawiającego i **bogatszy katalog od startu** dzięki przepływowi treści w sieci (zamiast „pustej tablicy pierwszego dnia”).
- **Moderacja po stronie OfferCloud:**  reagowanie na ogłoszenia niezgodne z regulaminem (usuwanie / blokowanie )
- **Rozliczenia i obsługa posprzedażowa:** OfferCloud przejmuje rozliczenia z klientem końcowym, w tym **faktury, reklamacje** oraz obsługę operacyjną procesu. Partner otrzymuje **prowizję od każdej złotówki wydanej przez jego użytkowników** (np. publikacje w kategoriach płatnych i dodatkowe opcje promowania) na podstawie **faktury** z utworzonego rozliczenia i **raportu**.

---

#### Korzyści biznesowe (dla partnera – wydawcy)

- **Koszt IT bliski zeru po stronie partnera:** hosting, utrzymanie, administracja modułu i aktualizacje po stronie OfferCloud – wydawca nie dokupuje zespołu ani infrastruktury pod tablicę.
- **Przychód z usług użytkownika końcowego:** prowizja dla partnera **od każdej złotówki** wydanej na usługę ogłoszeń przez jego użytkowników – zarówno w **publikacjach w kategoriach płatnych**, jak i w **opcjach promowania** 
- **Mniej operacji po stronie redakcji:** moderacja, reklamacje, fakturowanie i obsługa rozliczeń są po stronie OfferCloud; wydawca dostaje prowizję w oparciu o raport i rozliczenie.
- **Więcej treści i SEO:** rosnąca baza unikalnych ogłoszeń wspiera **świeżość indeksowaną** i długi ogon fraz lokalnych; marketplace podnosi **użyteczność serwisu** obok artykułów.
- **Retencja i społeczność:** powtarzalne wizyty osób sprzedających i kupujących w **lokalnym kontekście** – witryna staje się miejscem transakcji, nie tylko czytania newsów.
- **Skalowalność:** wzrost liczby ogłoszeń i ruchu nie wiąże się z projektowaniem własnego skalowania bazy i CDN przez redakcję.

---

#### Kąty marketingowe (hasła i obietnice do copy)

- „Bez kosztu dla wydawcy: startujesz bezpłatnie i zarabiasz na usługach wokół ogłoszeń.”
- „Rozwijaj lokalny rynek ogłoszeń na swojej stronie.”
- „Prosto, przejrzyście, profesjonalnie – bez przepłacania za własny silnik ogłoszeniowy.”
- „Dodaj ogłoszenie w minutach – bez konta i bez hasła.”
- „Kupujący i sprzedający się dogadują; Ty zarabiasz na narzędziach, nie na każdej transakcji.”
- „Jedno ogłoszenie, szerszy zasięg dzięki ekosystemowi OfferCloud.”
- „Widget na stronie głównej = więcej wejść w oferty i więcej nowych publikacji.”
- „Od pierwszego dnia realne ogłoszenia, nie pusta tablica.”

---

#### Wartość domyślna (rzeczy oczywiste dla B2B – warto explicite komunikować)

- **Start bez formalności:** nie ma potrzeby podpisywania osobnej umowy – wystarczy **rejestracja** i **akceptacja regulaminu**. Zasady działania są opisane w sposób przejrzysty (co jest płatne, jak działa moderacja, rozliczenia i prowizje).
- **Dopasowanie wyglądu:** możliwość zbliżenia stylu modułu do identyfikacji wizualnej portalu (zakres: kolory, typografia, layout – do katalogu możliwości technicznych).
- **Zgodność i dane osobowe:** przetwarzanie danych zgodnie z rolami (wydawca / dostawca), polityki prywatności i regulamin – **wspólna odpowiedzialność** wymaga jasnego opisu w materiałach dla użytkownika końcowego.
- **Ciągłość działania i bezpieczeństwo:** kopie zapasowe, aktualizacje, reagowanie na incydenty – argument „poważnego SaaS”, nie skryptu na hostingu wydawcy.
- **Jasne zasady kto może publikować:** osoby prywatne i/lub firmy – zdefiniowane w regulaminie marketplace partnera, spójne z modelem monetyzacji (B2C / małe firmy lokalne).



### OfferBoard Marketplace – rozwiązanie dla nieruchomości, job boardów i innych branż z własnymi kategoriami

**Wdrożenie referencyjne:** działa m.in. na **rekin.com**. Produkt służy do budowy marketplace’ów dla branż, które wymagają **własnych kategorii, filtrów i scenariuszy publikacji** – od **nieruchomości**, przez **job boardy**, po **usługi** i inne wertykale definiowane przez operatora.

**Model rozliczeń:** opłata **wdrożeniowa** oraz abonament **miesięczny lub roczny** (bez publikowania szczegółów cen w copy; warunki zależne od wdrożenia i zakresu).

**Własny biznes pod własną marką:** OfferBoard Marketplace jest **bazą technologiczną** do uruchomienia **własnego przedsięwzięcia na licencji OfferCloud** – z **własną marką** widoczną dla użytkowników końcowych i możliwością budowania pozycji na wybranym rynku (niska bariera wejścia po stronie produktu względem budowy systemu od zera).

**Integracje (przykłady zależne od branży):** synchronizacja danych z systemów źródłowych dopasowanych do projektu, np. w nieruchomościach z **Asari**, **Galactica** i **EstiCRM**, a w innych scenariuszach z CRM, ATS lub innymi narzędziami używanymi operacyjnie przez klienta.

**Przykład problemu – branża nieruchomości** (w innych kategoriach konkretne koszty i konkurencja są inne, ale potrzeba **własnego kanału i marki** bywa taka sama):

- **Koszty na dużych portalach:** publikacja i promocje na wiodących serwisach ogłoszeniowych (np. **Otodom**) bywają bardzo drogie i nieadekwatne do skali biur – przy wielu ofertach stałe lub skalowalne opłaty szybko obciążają budżet biura.
- **Operacyjnie:** agencje pracują w własnych CRM; ręczne powielanie ofert na osobnej witrynie to strata czasu i ryzyko **nieaktualnych list**.

**Rozwiązanie:** dedykowany marketplace (własny lub partnerski kanał dystrybucji) z automatycznym pobieraniem i synchronizacją ofert z zewnętrznych systemów – **mniejsze uzależnienie od pojedynczego drogiego kanału** przy zachowaniu jednego spójnego modelu danych mimo różnych formatów źródeł.





### OfferPage Moto – strona ofertowa dla motoryzacji (dealerzy, komisy, sprzedawcy profesjonalni)

**Dla kogo:** **dealerzy samochodowi**, **komisy** oraz inne **podmioty profesjonalne z branży motoryzacyjnej**, które chcą mieć nowoczesną, szybką i spójną **stronę ofertową** (katalog pojazdów) pod własną marką.

**Model rozliczeń:** opłata **wdrożeniowa** oraz abonament **miesięczny lub roczny** (bez publikowania szczegółów cen w copy; warunki zależne od zakresu).

**Problem klienta:** skuteczna prezentacja stocku i generowanie leadów przy rosnącej liczbie ogłoszeń i kanałów dystrybucji; potrzeba filtrów typowych dla motoryzacji oraz stabilnego, łatwego w utrzymaniu serwisu.

**Propozycja wartości (core):** dedykowana strona ofertowa dla motoryzacji: prezentacja stocku, filtry, leady i analityka — bez budowy własnego systemu od zera.

**Opcja (wyższy pakiet):** dołożenie warstwy marketplace / ogłoszeń użytkowników jako rozszerzenie, bez stawiania tego jako trzon produktu.

**Rozwiązanie OfferCloud (zakres bazowy):**

- prezentacja stocku dealerskiego w uporządkowanej strukturze (listy, karty, szczegóły oferty);
- filtry i parametry dopasowane do motoryzacji (np. marka, model, rocznik, przebieg, paliwo, skrzynia);
- architektura pod leady (formularze, źródła, śledzenie konwersji) i dalszą rozbudowę.

---

## Mocne strony platformy (USP)

1. **Niski próg technologiczny (SaaS / no-code po stronie klienta):** rozwiązanie na infrastrukturze OfferCloud; osadzenie możliwe przy różnych CMS-ach partnera.
2. **Prosty UX po stronie wystawiającego:** nacisk na szybkość i jasne zasady dodawania ogłoszeń, bez zbędnych barier wejścia.
3. **Efekt sieci:** ogłoszenie z jednego regionalnego portalu może być widoczne także w powiązanych serwisach – większy zasięg przy tych samych działaniach wystawiającego.
4. **Model ekonomiczny dla partnerów:** część monetyzacji opiera się na opłatach użytkowników końcowych (np. promocje); szczegóły abonamentu vs udziału w przychodzie – per produkt i umowa (do doprecyzowania w copy).

---

## Obszary do doprecyzowania przed finalnym copy

- **B2B / B2C:** kto jest umownym klientem w nieruchomościach (biuro vs właściciel portalu regionalnego)?
- **Rozliczenia między portalami:** zasady podziału przychodu, gdy ogłoszenie z portalu A jest widoczne lub konwertuje w kontekście portalu B.
- **Abonament vs revenue share:** Publisher vs OfferBoard Marketplace / OfferPage Moto – czy motoryzacja i nieruchomości to klasyczny abonament SaaS, a wydawcy głównie udział w transakcjach użytkowników?
- **Osadzenie vs domena własna:** pełna szerokość / iframe / headless (API + własny front) – komunikat per produkt.

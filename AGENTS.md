<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Owner rules

- zrwóć zawsze na początku jakiego modelu używasz w formie "✨ {model}: "
- nie używaj workaround'ów - zawsze stosuj najlepsze programistyczne praktyki senior programisty/CTO.

## Docs as single source of truth
- Przy pracy nad copy, treściami stron i opisami oferty zawsze sprawdź `docs/offercloud-business-description.md` i porównaj go z aktualną treścią.
- Jeśli w `docs/offercloud-business-description.md` są nowe lub zmienione informacje, nie dopisuj ich na siłę. Najpierw wskaż, co się zmieniło, i zapytaj użytkownika, czy uwzględnić to w treści.
- Bez pytania możesz poprawić tylko oczywiste i bezdyskusyjne zmiany, np. gdy coś już nie istnieje, zostało usunięte z oferty albo sposób działania został jednoznacznie zastąpiony innym.

## UI Style Guide

- Treat `/ui` as the source of truth for the site's reusable UI patterns and visual language.
- Before creating or changing UI on any page, first check the existing patterns documented in `src/app/ui/page.tsx` and reuse them whenever possible.
- If a needed pattern does not exist yet, create it in a reusable way, add it to `/ui` as the next documented element, and then apply it on the target page.
- Prefer extending shared patterns from `/ui` over introducing one-off Tailwind combinations that are not documented.

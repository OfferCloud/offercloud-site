import type { Metadata } from "next";

import { ProductDetailsPage, type RelatedProductCard } from "@/components/product-details-page";

const relatedProducts: RelatedProductCard[] = [
  {
    href: "/produkty/offercloud-publisher",
    category: "Media",
    title: "OfferCloud Publisher",
    shortDescription:
      "Rozwiazanie dla portali i wydawcow, ktorzy rozwijaja wlasne katalogi i powierzchnie ofertowe.",
  },
  {
    href: "/produkty/marketplace-motoryzacja",
    category: "SaaS Marketplace",
    title: "Marketplace dla motoryzacji",
    shortDescription:
      "Model dla automotive laczacy oferte dealera i ogloszenia od uzytkownikow.",
  },
];

export const metadata: Metadata = {
  title: "OfferBoard Marketplace",
  description:
    "OfferBoard Marketplace to rozwiazanie dla nieruchomosci, job boardow i innych branz z wlasnymi kategoriami, filtrami i integracjami z systemami zrodlowymi.",
  openGraph: {
    title: "OfferBoard Marketplace",
    description:
      "OfferBoard Marketplace to rozwiazanie dla nieruchomosci, job boardow i innych branz z wlasnymi kategoriami, filtrami i integracjami z systemami zrodlowymi.",
    type: "website",
  },
};

export default function RealEstateMarketplacePage() {
  return (
    <ProductDetailsPage
      category="Marketplace branzowy"
      title="OfferBoard Marketplace"
      description="OfferBoard Marketplace pomaga uruchamiac marketplace dla nieruchomosci, job boardow i innych branz, w ktorych potrzebne sa wlasne kategorie, filtry i integracje z systemami zrodlowymi."
      eyebrow="Wlasne kategorie i integracje"
      shortDescription="Rozwiazanie marketplace dla branz, ktore potrzebuja wlasnych kategorii, logiki publikacji i integracji z CRM, ATS lub innymi systemami."
      features={[
        "Wlasne kategorie, filtry i procesy publikacji dopasowane do branzy.",
        "Integracje z CRM, ATS lub innymi systemami zrodlowymi.",
        "Fundament pod marketplace pod marka klienta bez budowy od zera.",
      ]}
      relatedProducts={relatedProducts}
    />
  );
}

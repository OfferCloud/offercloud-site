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
    href: "/produkty/marketplace-nieruchomosci",
    category: "SaaS Marketplace",
    title: "OfferBoard Marketplace",
    shortDescription:
      "Rozwiazanie dla branz z wlasnymi kategoriami, filtrami i integracjami z systemami zrodlowymi.",
  },
];

export const metadata: Metadata = {
  title: "Marketplace dla motoryzacji",
  description:
    "OfferCloud dla automotive: marketplace laczacy oferte dealera z ogloszeniami dodawanymi przez uzytkownikow.",
  openGraph: {
    title: "Marketplace dla motoryzacji",
    description:
      "OfferCloud dla automotive: marketplace laczacy oferte dealera z ogloszeniami dodawanymi przez uzytkownikow.",
    type: "website",
  },
};

export default function AutomotiveMarketplacePage() {
  return (
    <ProductDetailsPage
      category="SaaS Marketplace"
      title="Marketplace dla motoryzacji"
      description="OfferCloud wspiera platformy automotive, w ktorych obok profesjonalnego stocku dealerskiego funkcjonuje rowniez otwarta warstwa ogloszen od uzytkownikow."
      eyebrow="Dealer + oferty uzytkownikow"
      shortDescription="Marketplace motoryzacyjny, ktory laczy oferte wlasna dealera z ofertami dodawanymi przez uzytkownikow."
      features={[
        "Wspolna prezentacja oferty dealerskiej i ogloszen od uzytkownikow.",
        "Elastyczna struktura pod inventory, leady i kampanie sprzedazowe.",
        "Fundament pod dalsze integracje i rozbudowe modelu marketplace.",
      ]}
      relatedProducts={relatedProducts}
    />
  );
}

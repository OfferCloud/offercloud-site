import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  ContactModalForm,
  ContactModalFormProvider,
} from "@/components/contact-modal-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OfferCloud",
    template: "%s · OfferCloud",
  },
  description:
    "OfferCloud buduje platformy ofertowe dla serwisow informacyjnych, nieruchomosci i motoryzacji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-50">
        <ContactModalFormProvider>
          <div className="flex min-h-full flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ContactModalForm />
        </ContactModalFormProvider>
      </body>
    </html>
  );
}

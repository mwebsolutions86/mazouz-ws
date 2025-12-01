import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "MazouzWS - Digital Forge",
  description: "Agence de développement web et mobile futuriste.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // CORRECTION: Typage Promise
}) {
  // CORRECTION: On doit await les params dans Next.js 15+
  const { locale } = await params;

  // 1. Vérification de la langue
  if (!['fr', 'en', 'ar'].includes(locale)) {
    notFound();
  }

  // 2. Chargement des messages pour la langue
  const messages = await getMessages({ locale }); 

  // 3. Détection de la direction (RTL pour l'arabe)
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        suppressHydrationWarning={true}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
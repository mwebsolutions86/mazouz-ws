import type { Metadata, Viewport } from "next"; // Import Viewport ajouté
import "./globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

export const metadata: Metadata = {
  title: "MazouzWS - Digital Forge",
  description: "Agence de développement web et mobile futuriste.",
};

// C'EST CE BLOC QUI MANQUAIT POUR QUE LE MOBILE SOIT DÉTECTÉ
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
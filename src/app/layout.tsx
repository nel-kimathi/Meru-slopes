import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyBookingBar } from "@/components/layout/sticky-booking-bar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Meru Slopes Hotel | Catch the real feeling of the slopes",
  description:
    "An intimate mountain retreat where Kenyan hospitality meets four-star comfort, at the foot of Mt. Kenya.",
  openGraph: {
    title: "Meru Slopes Hotel",
    description:
      "An intimate mountain retreat where Kenyan hospitality meets four-star comfort, at the foot of Mt. Kenya.",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBookingBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "./container.css";
import "./utils/text.css";
import "./custom-swiper.css";
import dynamic from "next/dynamic";
import { textFont } from "./utils/fonts";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import Head from "next/head";

const SmoothScrolling = dynamic(() => import("./SmoothScrolling"));

export const metadata: Metadata = {
  title: "La P'tite Tavern",
  description: "Restaurant La P'tite Taverne situé à la Frette, cuisine française, bistronomique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" sizes="48x48"/>
      </Head>
      <body className={textFont.className}>
        <SmoothScrolling>
          <NavBar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

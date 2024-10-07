import type { AppProps } from "next/app";
import "../styles/globals.css"; // Importation des styles globaux
import Navbar from "@/components/navbar"; // Importation de la navbar
import { GeistSans } from "geist/font/sans";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Animation s'exécute une seule fois
    });
  }, []);
  return (
    <>
      <main className={GeistSans.className}>
        {/* Navbar globale */}
        <Navbar />

        {/* Le composant de la page spécifique sera rendu ici */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

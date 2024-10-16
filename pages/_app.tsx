/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-sort-props */
import type { AppProps } from "next/app";

import "../styles/globals.css"; // Importation des styles globaux
import Navbar from "@/components/navbar"; // Importation de la navbar
import { useRouter } from 'next/router';
import { GeistSans } from "geist/font/sans";
import { useEffect } from "react";
import { useState } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Animation s'exécute une seule fois
    });
  }, []);
  const router = useRouter();
  const noNavRoutes = ['/login', '/signup']; 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Le composant est monté côté client
    setMounted(true);
  }, []);

  return (
    <>
      <main className={GeistSans.className}>
        {/* Navbar globale */}
        {/* Afficher la navbar seulement si la route n'est pas dans la liste des routes exclues */}
        {mounted && !noNavRoutes.includes(router.pathname) && <Navbar />}
        {/* Le composant de la page spécifique sera rendu ici */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

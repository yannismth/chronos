import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Importation des styles globaux
import Navbar from '@/components/navbar'; // Importation de la navbar

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Navbar globale */}
      <Navbar />
      
      {/* Le composant de la page spécifique sera rendu ici */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

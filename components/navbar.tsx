import { Button } from "@/components/ui/button";
import Link from 'next/link';
const navlinks = ["Features", "Solutions", "Pricings"];

import { useState, useEffect } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Ajuste cette valeur selon ton besoin
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="container mx-auto px-6 flex items-center justify-between w-full">
        <a href="/" className="text-xl font-black uppercase">
          Chronos
        </a>
        
        {/* Menu normal pour les grands écrans */}
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <a href="/">{navlink}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button>Get Started for Free</Button>
          </div>
        </nav>

        {/* Icone hamburger pour le menu mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {/* Icône hamburger */}
            &#9776;
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-background/60 backdrop-blur w-full py-4">
          <ul className="flex flex-col items-center gap-4">
            {navlinks.map((navlink, index) => (
              <li key={index}>
                <a href="/" className="text-base">
                  {navlink}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-2 mt-4">
            <Button variant="outline">
              <Link href="/login">Login</Link>
            </Button>
            <Button>Get Started for Free</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

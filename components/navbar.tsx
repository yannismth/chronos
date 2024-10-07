import Link from "next/link";
import { Button } from "@/components/ui/button";
const navlinks = ["Features", "Solutions", "Pricings"];
import { useState, useEffect } from "react";
const Navbar = () => {
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
      <div className="container mx-auto px-8 flex items-center justify-between w-10/12">
        <a href="/" className="text-xl font-black uppercase">
          Chronos
        </a>
        <nav className="flex items-center gap-12">
          <ul className="flex gap-10">
            {navlinks.map((navlinks, index) => (
              <li key={index}>
                <a href="">{navlinks}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <Button variant="outline">Login</Button>
            <Button>Get Started for Free</Button>
          </div>
        </nav>
      </div>
      <hr
        className={`absolute w-full bottom-0 transition-opacity duration-300 ease-in-out ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
};

export default Navbar;

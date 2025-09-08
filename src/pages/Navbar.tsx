import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

type NavbarProps = {
  colors?: string;
};

function Navbar({ colors = "bg-white" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickServices = () => {
    const menu = document.querySelector(".menu-services") as HTMLElement | null;
    if (menu) {
      menu.style.display = menu.style.display === "" ? "none" : "";

      if (!scrolled) {
        menu.style.top = "";
      } else {
        menu.style.top = "61px";
      }
    }
  };

  return (
    <nav className={`navbar flex justify-around items-center p-4 ${colors}`}>
      <a href="/">
        <img src="/logo_expertise.png" alt="Logo" className="w-[200px]" id="navbarLogo" />
      </a>
      <div className="flex flex-1 justify-center">
        <ul
          id="navbarNav"
          className={`flex items-center space-x-4 gap-8 text-gray-800 text-l mx-auto transition-transform duration-1000  ${
            scrolled ? "translate-y-5 fixed top-0.5 bg-gray-100 p-5 rounded-2xl z-10" : "translate-y-0"
          }`}
        >
          <li>
            <a href="/" className="text-xl">
              Accueil
            </a>
          </li>
          <li className="relative group">
            <a id="navbarServices" className="text-xl d-flex" onClick={handleClickServices}>
              Services
              <ChevronDown className="inline-block ml-1" />
            </a>
            <div className="menu-services" aria-labelledby="navbarDropdown" style={{ display: "none" }}>
              <a href="/gestion" className="px-4">
                Gestion
              </a>
              <a href="/ressources-humaines" className="px-4">
                Ressources Humaines
              </a>
              <a href="/hygiene-et-securite" className="px-4">
                Hygiène et Sécurité
              </a>
              <a href="/controle-de-gestion" className="px-4">
                Contrôle de Gestion
              </a>{" "}
              <a href="/transformation" className="px-4">
                Transformation
              </a>
              <a href="/appel-offres" className="px-4">
                Appel d'Offres
              </a>
            </div>
          </li>
          <li>
            <a href="/about" className="text-xl">
              A propos
            </a>
          </li>
        </ul>
      </div>
      <button className=" text-white" id="navbarButtonContact">
        <a href="/pricing" className="bg-[#286c91] text-white px-6 py-3 rounded-full hover:bg-[#1f4f66] transition-colors text-xl">
          Obtenir un devis
        </a>
      </button>
    </nav>
  );
}
export default Navbar;

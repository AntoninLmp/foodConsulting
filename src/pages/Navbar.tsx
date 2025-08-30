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
        <img src="/logo_expertise.png" alt="Logo" className="w-[200px]" />
      </a>
      <div className="flex justify-center">
        <ul
          className={`flex space-x-4 gap-8 text-gray-800 text-l transition-transform duration-1000  ${
            scrolled ? "translate-y-5 fixed top-0.5 bg-gray-100 p-5 rounded-2xl z-10" : "translate-y-0"
          }`}
        >
          <li>
            <a href="/" className="text-xl">
              Accueil
            </a>
          </li>
          <li className="relative group">
            <a id="navbarServices" className="text-xl" onClick={handleClickServices}>
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
            {/* Menu déroulant visible au hover du parent OU du menu */}
            {/* <ul className="absolute left-[-55px] mt-4 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-20">
              <li className="py-2 hover:bg-gray-100 rounded-lg">
                <a href="/gestion" className="px-4">
                  Gestion
                </a>
              </li>
              <li className="py-2 hover:bg-gray-100 rounded-lg">
                
              </li>
              <li className="py-2 hover:bg-gray-100 rounded-lg">
                
              </li>
              <li className="py-2 hover:bg-gray-100 rounded-lg">
                
              </li>
              <li className="py-2 hover:bg-gray-100 rounded-lg">
               
              </li>
              <li className="py-2 hover:bg-gray-100 rounded-lg">
                
              </li>
            </ul> */}
          </li>

          {/* <li>
            <a href="/contact" className="text-xl">
              Contact
            </a>
          </li> */}
          <li>
            <a href="/about" className="text-xl">
              A propos
            </a>
          </li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white">
        <a href="/pricing" className="btn">
          Obtenir un devis
        </a>
      </button>
    </nav>
  );
}
export default Navbar;

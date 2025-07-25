import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar flex justify-around items-center p-4">
      <a href="/">
        <img src="/logo_expertise.png" alt="Logo" className="w-[200px]" />
      </a>
      <div className="flex justify-center">
        <ul
          className={`flex space-x-4 gap-8 text-gray-800 text-l transition-transform duration-1000  ${
            scrolled ? "translate-y-5 fixed top-0.5 bg-gray-100 p-5 rounded-2xl" : "translate-y-0"
          }`}
        >
          <li>
            <a href="/" className="text-xl">Accueil</a>
          </li>
          <li>
            <a href="/#services" className="text-xl">Services</a>
          </li>
          <li>
            <a href="/" className="text-xl">Contact</a>
          </li>
          <li>
            <a href="/about" className="text-xl">A propos</a>
          </li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white">
        <a href="/login" className="btn">
          Obtenir un devis
        </a>
      </button>
    </nav>
  );
}
export default Navbar;
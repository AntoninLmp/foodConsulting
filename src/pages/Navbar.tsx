function Navbar() {
  return (
    <nav className="navbar flex justify-around items-center p-4">
      <a href="/">
        <img src="/logo-removebg-resize.png" alt="Logo" className="navbar__logo-img w-[150px]" />
      </a>
      <ul className="navbar__links flex space-x-4 text-xl gap-8 text-gray-800 fixed" >
        <li>
          <a href="/">Acceuil</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">A propos</a>
        </li>
      </ul>
      <button className="bg-blue-500 text-white">
        <a href="/login" className="btn">
          Login
        </a>
      </button>
    </nav>
  );
}
export default Navbar;

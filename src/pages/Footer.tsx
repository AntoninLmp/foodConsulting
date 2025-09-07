
const Footer = () => (
    <footer className="bg-neutral-800 text-white pt-8 pb-4 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
                <img src="/logo_expertise.png" alt="Logo Food Consulting" className="w-32 mb-2" />
                <p className="text-lg font-semibold">Food Consulting</p>
                <p className="text-sm text-[#bcd0e6]">Expertise et accompagnement en restauration collective</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold mb-2">Contact</h3>
                <p>Email : <a href="mailto:contact@foodconsulting.fr" className="underline">consulting.food.expertise@gmail.com</a></p>
                {/* <p>Tél : <a href="tel:+33123456789" className="underline">01 23 45 67 89</a></p> */}
                <p>Adresse : Caen, Normandie, France</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold mb-2">Navigation</h3>
                <a href="/" className="hover:underline">Accueil</a>
                <a href="/about" className="hover:underline">A propos</a>
                <a href="/pricing" className="hover:underline">Obtenir un devis</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold mb-2">Suivez-nous</h3>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/david-lampin-206688105/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-[#bcd0e6]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg>
                    </a>
                    <a target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-[#bcd0e6]">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="border-t border-[#bcd0e6] mt-8 pt-4 text-center text-sm text-[#bcd0e6]">
            &copy; {new Date().getFullYear()} Food Consulting. Tous droits réservés.
        </div>
    </footer>
);

export default Footer;
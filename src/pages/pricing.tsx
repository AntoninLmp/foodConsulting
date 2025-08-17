
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PriceCard from "./components/PriceCard";
import ContactForm from "./components/ContactForm";


function Pricing() {
  const [formule, setFormule] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <Navbar colors="bg-[#8EB5C0]" />
      <div>
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute">
            <path
              fill="#8EB5C0"
              fillOpacity="1"
              d="M0,96L30,80C60,64,120,32,180,16C240,0,300,0,360,16C420,32,480,64,540,90.7C600,117,660,139,720,138.7C780,139,840,117,900,112C960,107,1020,117,1080,138.7C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
          <h1 className="pt-[25vh] relative z-30">Formule disponible</h1>
          <p className="pt-5">Choisissez un plan qui correspond à vos besoins.</p>
          <div className="flex flex-wrap justify-center gap-6 m-20 mx-[20%]">
            <PriceCard
              type="à l'heure"
              description="Ce tarif est facturé à l'heure hors taxes. Ce tarif comprend 1 heure de travail."
              price={"100 €"}
              priceDescription="/ heure"
              onClick={() => {
                setFormule("heure");
                setSubject("Demande de devis pour la formule à l'heure");
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <PriceCard
              type="journalier"
              description="Ce tarif est facturé à la journée hors taxes. Ce tarif comprend 7 heures de travail."
              price={"600 €"}
              priceDescription="/ jour"
              onClick={() => {
                setFormule("journalier");
                setSubject("Demande de devis pour la formule journalier");
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <PriceCard
              type="mensuel"
              description="Ce tarif est facturé au mois hors taxes. Ce tarif comprend 24 heures de travail."
              price={"2000 €"}
              priceDescription="/ mois"
              onClick={() => {
                setFormule("mensuel");
                setSubject("Demande de devis pour la formule mensuel");
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </section>
        {/* ...existing code... */}
        <section>
          <ContactForm formule={formule} subject={subject} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;

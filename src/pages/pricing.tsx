import Navbar from "./Navbar";
import Footer from "./Footer";
import PriceCard from "./components/PriceCard";
import ContactForm from "./components/ContactForm";

function Pricing() {
  return (
    <>
      <Navbar  colors="bg-[#8EB5C0]"/>
      <div>
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute">
            <path
              fill="#8EB5C0"
              fill-opacity="1"
              d="M0,96L30,80C60,64,120,32,180,16C240,0,300,0,360,16C420,32,480,64,540,90.7C600,117,660,139,720,138.7C780,139,840,117,900,112C960,107,1020,117,1080,138.7C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
          <h1 className="pt-[225px]">Formule disponible</h1>
          <p className="pt-5">Choisissez un plan qui correspond à vos besoins.</p>
          <div className="flex flex-wrap justify-center gap-6 m-20 mx-[20%]">
            <PriceCard
              type="à l'heure"
              description="Ce tarif est facturé à l'heure hors taxes. Ce tarif comprend 1 heure de travail."
              price={"100 €"}
              priceDescription="/ heure"
              onClick={() => {}}
            />
            <PriceCard
              type="journalier"
              description="Ce tarif est facturé à la journée hors taxes. Ce tarif comprend 7 heures de travail."
              price={"600 €"}
              priceDescription="/ jour"
              onClick={() => {}}
            />
            <PriceCard
              type="mensuel"
              description="Ce tarif est facturé au mois hors taxes. Ce tarif comprend 24 heures de travail."
              price={"2000 €"}
              priceDescription="/ mois"
              onClick={() => {}}
            />
          </div>
        </section>
        <section>
          <h2 className="text-center text-3xl font-semibold mb-8 italic">Ils m'ont fait confiance alors pourquoi pas vous ?</h2>
          <div className="flex flex-wrap justify-center gap-6 m-20 mx-[20%]">
            <img src="https://www.cse-guide.fr/medias/2019/05/Sodexo.png" alt="Logo Expertise" className="w-[200px] h-auto" />
            <img src="https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png" alt="Logo Expertise" className="w-[200px] h-auto" />
            <img src="http://www.dupont-restauration.fr/wp-content/uploads/2017/01/logo-dupont-2017.png" alt="Logo Expertise" className="w-[250px] h-auto" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlmrpa7epKnr7d-rWnWzUDixlC_Y0ufJ6_g&s" alt="Logo Expertise" className="w-[100px] h-1/2" />
          </div>
        </section>
        <section>
          <ContactForm />
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Pricing;

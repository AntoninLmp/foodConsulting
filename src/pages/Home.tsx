
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ClockArrowUp, Speech, Bubbles, ChartArea, Handshake, CalendarSync } from "lucide-react";
import ServiceCard from "./components/ServiceCard";

function Home() {
  return (
    <>
      <Navbar />
      {/* Section d'introduction */}
      <section className="text-gray-800 h-[70vh] flex items-center justify-around mx-[15%]">
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">
            {/* "Une vision sans exécution n’est qu’une hallucination." — Thomas Edison */}
            David Lampin.
          </h1>
          <h2 className="text-xl font-light mb-8">Consultant en restauration et gestion d'entreprise</h2>
          <button>
            <a
              href="https://calendly.com/david-lampin/30min"
              className="bg-[#286c91] text-white px-6 py-3 rounded-full hover:bg-[#1f4f66] transition-colors text-xl"
            >
              Prendre rendez-vous
            </a>
          </button>
          <button>
            <a
              href="/pricing/#contact-form"
              className="ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors text-xl"
            >
              Me contacter
            </a>
          </button>
        </div>
        <img src="/Photo_profil.png" alt="photo de profil" className="w-1/2 max-w-[600px]"/>
      </section>

      {/* Section de présentation */}
      <section className="text-white px-[15%] py-10 my-10 grid grid-cols-4 gap-4 bg-[#286C91]">
        <div className="col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            A propos de <span className="italic text-4xl ">FoodConsulting</span>{" "}
          </h2>
          <h3 className="text-2xl">35 ans d'expertise au service de votre réussite.</h3>
          <p className="text-l mb-4 text-justify px-5 font-light">
            <br />
            <br />
            Après plus de trois décennies passées au cœur de l’univers de la restauration, j’ai décidé de mettre mon
            savoir-faire, mon expérience terrain et ma vision stratégique au service des professionnels du secteur.
            <br />
            <br />
            Mon parcours m’a conduit à occuper des postes clés dans des établissements de toutes tailles — de
            l’indépendant ambitieux à la chaîne structurée — ce qui m’a permis de maîtriser chaque aspect du métier :
            gestion opérationnelle, management d’équipes, rentabilité, création de concepts, relation client, normes
            d’hygiène, et bien plus encore. <br />
            <br />
            Aujourd’hui, je mets cette expertise à votre disposition pour vous accompagner dans vos défis : <br />
            lancement d’un projet, repositionnement, amélioration de la rentabilité, structuration de vos équipes, ou
            optimisation de votre offre. Mon approche est simple, pragmatique et sur mesure. <br />
            <br />
            Chaque établissement a sa propre identité, ses ambitions, ses contraintes. Mon rôle est de vous aider à
            transformer vos idées en résultats concrets et durables
          </p>
        </div>
        <div className="col-span-2 flex items-center">
          <img
            src="https://i.pinimg.com/736x/63/c1/f3/63c1f38307b961d147e211e7ebacfdd0.jpg"
            alt=""
            className="rounded-4xl h-[70%] "
          />
        </div>
      </section>

      {/* Section Services */}
      <section id="services">
        <h2 className="text-3xl text-gray-800 font-semibold text-center mb-8 ">Mes domaines d'expertises</h2>
        <div className="grid grid-cols-3 gap-4 px-[15%] mb-20">
          <ServiceCard
            icon={ClockArrowUp}
            title="Gestion"
            description="Sites modernes, rapides et adaptés à tous les écrans."
            urlRedirect="/gestion"
          />
          <ServiceCard
            icon={Speech}
            title="Ressources Humaines"
            description="Interfaces intuitives pour une meilleure expérience utilisateur."
            urlRedirect="/ressources-humaines"
          />
          <ServiceCard
            icon={Bubbles}
            title="Hygiène et Sécurité"
            description="Interfaces intuitives pour une meilleure expérience utilisateur."
            urlRedirect="/hygiene-et-securite"
          />
          <ServiceCard
            icon={ChartArea}
            title="Controle de Gestion"
            description="Interfaces intuitives pour une meilleure expérience utilisateur."
            urlRedirect="/controle-de-gestion"
          />
          <ServiceCard
            icon={CalendarSync}
            title="Transformation des offres ou des locaux"
            description="Interfaces intuitives pour une meilleure expérience utilisateur."
            urlRedirect="/transformation"
          />
          <ServiceCard
            icon={Handshake}
            title="Appel d'Offres"
            description="Interfaces intuitives pour une meilleure expérience utilisateur."
            urlRedirect="/appel-offres"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

import Navbar from "./Navbar";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import { Code, Brush } from "lucide-react";

function Home() {
  return (
    <>
      <Navbar />
      <section className="text-gray-800 flex flex-col items-center justify-center h-[800px]">
        <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon site vitrine</h1>
        <p className="text-xl text-center">Ici, je présente mes projets, mes services et comment me contacter.</p>
      </section>
      <section className="text-gray-800 mx-[20%] my-10 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2 className="text-3xl font-semibold mb-4">A propos de FoodConsulting</h2>
          <h3 className="text-3xl">35 ans d'expertise au service de votre réussite.</h3>
          <p className="text-xl mb-4 text-justify px-5 font-light">
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
        <img
          src="https://i.pinimg.com/736x/63/c1/f3/63c1f38307b961d147e211e7ebacfdd0.jpg"
          alt=""
          className="rounded-4xl"
        />
      </section>
      <section>
        
      </section>
      <Footer />
    </>
  );
}

export default Home;

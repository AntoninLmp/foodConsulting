import ServiceDescription from "./ServiceDescription";

const services = [
  {
    title: "Analyse financière",
    points: [
      "Analyse des budgets, coûts de revient et marges.",
      "Mise en place de tableaux de bord pour suivre la performance financière.",
      "Analyse des écarts de rentabilité et élaboration de plans d’action.",
      "Mise en place d’outils de suivi des comptes d’exploitation.",
    ],
  },
  {
    title: "Organisation interne",
    points: [
      "Refonte des processus pour accroître l’efficacité du personnel.",
      "Optimisation de l’organisation interne et des plannings.",
    ],
  },
  {
    title: "Achats & Fournisseurs",
    points: [
      "Conseils pour la négociation avec les fournisseurs.",
      "Optimisation de la gestion des achats.",
    ],
  },
  {
    title: "Performance opérationnelle",
    points: [
      "Évaluation des processus opérationnels, gestion des stocks, qualité du service, menus.",
      "Identification des points faibles et des opportunités d’amélioration.",
    ],
  },
  {
    title: "Formation & Autonomie",
    points: [
      "Formation des équipes à l’utilisation des outils d’analyse.",
      "Accompagnement à la prise en main pour une amélioration continue.",
    ],
  },
];

function Gestion() {
  return (
    <div>
      <ServiceDescription
        title="Gestion"
        sousTitle="Optimisez votre performance grâce à notre accompagnement"
        description="Je propose un service d'accompagnement complet pour améliorer votre rentabilité, renforcer votre efficacité interne et vous rendre plus autonome dans la gestion de vos performances. Voici les domaines dans lesquels je peux vous aider :"
        services={services}
      />
    </div>
  );
}

export default Gestion;
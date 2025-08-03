import ServiceDescription from "./ServiceDescription";

const services = [
    {
        title: "Ressources humaines",
        points: [
        "Élaboration de stratégies de recrutement, de formation, et de fidélisation.",
        "Création d’un climat de travail motivant et favorable à la performance.",
        "Développement de politiques de gestion des performances.",
        "Formation aux bonnes pratiques de service et de cuisine.",
        "Assistance dans la création et la gestion des plannings.",
        "Suivi de la gestion des congés.",
        "Chiffrage et suivi de la masse salariale.",
        ]
    }, {
    title: "Hygiène et sécurité",
        points: [
        "Mise en place de normes de qualité et d’hygiène.",
        "Élaboration de programmes pour la satisfaction client.",
        "Suivi des normes HACCP et accompagnement à leur mise en œuvre.",
        "Audits et plans d’action pour garantir conformité et sécurité.",
        "Suivi des fournisseurs pour analyses et produits lessiviels.",
        ]
    }
];

function HumainRessources() {
  return (
    <div>
      <ServiceDescription
        title="Ressources humaines"
        sousTitle="Optimisez la gestion de vos équipes"
        description="Je vous accompagne dans la gestion de vos ressources humaines pour améliorer la performance de votre équipe et garantir un environnement de travail sain."
        services={services}
      />
    </div>
  );
}

export default HumainRessources;
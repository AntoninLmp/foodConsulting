import ServiceDescription from "./ServiceDescription";

const services = [
  {
    title: "Contrôle de Gestion",
    points: [
      "Analyse des coûts pour maximiser rentabilité et qualité.",
      "Évaluation des états financiers pour repérer forces et faiblesses.",
      "Mise en place de tableaux de bord financiers.",
      "Identification des coûts cachés et inefficacités.",
      "Stratégies d’approvisionnement et négociation avec fournisseurs.",
      "Contrôles budgétaires pour réduire gaspillage et optimiser ressources.",
    ],
  }
];

function ControleGestion() {
  return (
    <div>
      <ServiceDescription
        title="Contrôle de Gestion"
        sousTitle="Optimisez la gestion de votre établissement"
        description="Je vous aide à maîtriser vos coûts et à améliorer la rentabilité de votre établissement grâce à une analyse approfondie et des stratégies adaptées."
        services={services}
      />
    </div>
  );
}

export default ControleGestion;

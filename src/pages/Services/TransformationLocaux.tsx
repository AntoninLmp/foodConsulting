import ServiceDescription from "./ServiceDescription";

const services = [
    {
        title: "Transformation des offres",
        points: [
        "Analyse des tendances du marché et identification d’opportunités.",
        "Élaboration de stratégies de transformation des offres.",
        "Optimisation de la présence en ligne et communication digitale."
        ]
    }, {
    title: "Transformation des locaux",
        points: [
        "Conseil pour le changement de mode de service ou d’équipement.",
        "Accompagnement dans la rénovation ou la réorganisation des espaces.",
        ]
    }
];

function TransformationLocaux() {
  return (
    <div>
      <ServiceDescription
        title="Transformation des offres ou locaux"
        sousTitle="Optimisez vos espaces et offres pour une meilleure performance"
        description="Je vous accompagne dans la transformation de vos offres ou de vos locaux pour améliorer l'expérience client et optimiser vos opérations. Voici les domaines dans lesquels je peux vous aider :"
        services={services}
      />
    </div>
  );
}

export default TransformationLocaux;
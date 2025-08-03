import ServiceDescription from "./ServiceDescription";

const services = [
    {
        title: "Accompagnement à la rédaction d'appels d'offres",
        points: [
        "Rédaction de documents d’appel d’offres précis.",
        "Definition des critères de sélection et d’évaluation.",
        "Assistance dans la préparation des réponses aux appels d’offres.",
        "Structuration des processus de soumission.",
        "Vérification des références et expériences.",
        "Accompagnement dans la négociation avec les fournisseurs et partenaires.",
        ]
    }, {
    title: "Gestion des appels d'offres",
        points: [
            "Analyse des besoins et des attentes des clients.",
            "Élaboration de cahiers des charges détaillés.",
            "Suivi des réponses et évaluation des offres.",
            "Accompagnement dans la négociation des contrats.",
            "Analyse comparative des offres pour optimiser coûts et qualité."
        ]
    }
];

function AppelOffres() {
  return (
    <div>
      <ServiceDescription
        title="Appel d'Offres"
        sousTitle="Accompagnez vos projets d'appel d'offres avec expertise"
        description="Je vous accompagne dans la gestion de vos appels d'offres pour garantir la réussite de vos projets. Voici les domaines dans lesquels je peux vous aider :"
        services={services}
      />
    </div>
  );
}

export default AppelOffres;
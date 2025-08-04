import ServiceDescription from "./ServiceDescription";

const services = [
  {
    title: "Hygiène",
    points: [
      "Mise en place de normes de qualité et d’hygiène.",
      "Élaboration de programmes pour la satisfaction client.",
      "Suivi des normes HACCP et accompagnement à leur mise en œuvre.",
      "Suivi des fournisseurs pour analyses et produits lessiviels.",
    ],
  },
  {
    title: "Sécurité",
    points: [
      "Audits et plans d’action pour garantir conformité et sécurité.",
      "Formation aux bonnes pratiques de sécurité alimentaire.",
      "Mise en place de procédures de gestion des crises.",
    ],
  },
];

function HygieneEtSecurite() {
  return (
    <div>
      <ServiceDescription
        title="Hygiène et Sécurité"
        sousTitle="Assurez la sécurité et l'hygiène de votre établissement"
        description="Je vous accompagne dans la mise en place de normes d'hygiène et de sécurité pour garantir la conformité de votre établissement et la satisfaction de vos clients."
        services={services}
      />
    </div>
  );
}

export default HygieneEtSecurite;

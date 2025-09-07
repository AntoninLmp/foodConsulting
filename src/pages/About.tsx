
import Navbar from "./Navbar";
import Footer from "./Footer";

const experiences = [
  {
    company: "Api Restauration",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGdVeLs6yDzNQ/company-logo_200_200/company-logo_200_200/0/1631320991592?e=1759363200&v=beta&t=kEc6lwMi1jfy300RiqoeCW3w_RvrfbhhjT3ayLU681k", // Remplacer par le bon logo si disponible
    title: "Responsable d'exploitation développement grand compte sanitaire",
    type: "CDI",
    date: "avr. 2024 - aujourd’hui · 1 an 5 mois",
    location: "Caen, Normandie, France · À distance",
  },
  {
    company: "Dupont Restauration SAS",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGtBBeMP_ledg/company-logo_100_100/company-logo_100_100/0/1677053934373/dupont_restauration_sas_logo?e=1759363200&v=beta&t=HEXyhoqIYBMo7AbQr985WRIjEOCToaLPLoi1-xn-Bog",
    title: "Responsable de secteur",
    type: "CDI",
    date: "févr. 2022 - mars 2024 · 2 ans 2 mois",
    location: "Caen, Normandie, France",
  },
  {
    company: "API restauration",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGdVeLs6yDzNQ/company-logo_200_200/company-logo_200_200/0/1631320991592?e=1759363200&v=beta&t=kEc6lwMi1jfy300RiqoeCW3w_RvrfbhhjT3ayLU681k", // Remplacer par le bon logo si disponible
    title: "Responsable de secteur API",
    type: "CDI",
    date: "déc. 2021 - janv. 2022 · 2 mois",
    location: "Ville de Paris, Île-de-France, France",
  },
  {
    company: "Restalliance",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFsqm7kyy22Jw/company-logo_100_100/company-logo_100_100/0/1651239384325/restalliance_logo?e=1759363200&v=beta&t=JXZD5rB__l_2I7NIeTJzuiVd0ET7NRkFY-_Md-DAi2E",
    title: "Responsable de secteur",
    type: "Temps plein",
    date: "mai 2018 - nov. 2021 · 3 ans 7 mois",
    location: "Champlan",
  },
  {
    company: "LEADER PRICE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGybY5Unf4R0w/company-logo_100_100/company-logo_100_100/0/1631309026241?e=1759363200&v=beta&t=-GeZa2f9cRNhNXS7ITxxK4-WSyqBbJFg15klbHB_Jts",
    title: "Directeur de magasin",
    type: "",
    date: "nov. 2016 - avr. 2018 · 1 an 6 mois",
    location: "Limours",
  },
  {
    company: "Sodexo",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGlvBxOcBV-pw/company-logo_100_100/company-logo_100_100/0/1719819668533/sodexo_logo?e=1759363200&v=beta&t=EgnJV7Wf6JjDFFsaVrnCNaNfR3ExgoqysIezrawMr8U",
    title: "Directeur d'exploitation",
    type: "",
    date: "janv. 2001 - juil. 2015 · 14 ans 7 mois",
    location: "France",

  },
  {
    company: "Sodexo",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGlvBxOcBV-pw/company-logo_100_100/company-logo_100_100/0/1719819668533/sodexo_logo?e=1759363200&v=beta&t=EgnJV7Wf6JjDFFsaVrnCNaNfR3ExgoqysIezrawMr8U",
    title: "Responsable séminaire",
    type: "",
    date: "janv. 1999 - janv. 2001 · 2 ans 1 mois",
    location: "",
  },
  {
    company: "Sodexo",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGlvBxOcBV-pw/company-logo_100_100/company-logo_100_100/0/1719819668533/sodexo_logo?e=1759363200&v=beta&t=EgnJV7Wf6JjDFFsaVrnCNaNfR3ExgoqysIezrawMr8U",
    title: "Chef de rang",
    type: "",
    date: "janv. 1997 - janv. 1999 · 2 ans 1 mois",
    location: "",
    missions: [
      "Gestion d'une partie de la salle",
      "Commandes",
      "Facturation"
    ]
  },
  {
    company: "Ramsay Santé",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEYWF75540TkQ/company-logo_100_100/company-logo_100_100/0/1630567249840/ramsaysante_logo?e=1759363200&v=beta&t=3aNdr_5IokYs3JVam_NUn1FhFAqPtkrq_bvHlyxYefc",
    title: "Maitre d'hôtel",
    type: "",
    date: "janv. 1995 - janv. 1997 · 2 ans 1 mois",
    location: "France",
  }
];

function About() {
  return (
    <>
      <Navbar colors="bg-[#f5f9fc]" />
      <div className="min-h-svh bg-gradient-to-b from-[#f5f9fc] to-white py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold text-[#1a365d] mb-4">À propos</h1>
            <p className="text-lg text-[#3b5b7e] max-w-2xl mx-auto">
              Fort de mon expérience dans la restauration collective et la gestion, j'ai travaillé avec de nombreux établissements dans leur développement, leur organisation et leur performance. Découvrez mon parcours et mes expertises au fil des années.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 border border-[#e3eaf3] transition-transform hover:scale-[1.03] hover:shadow-xl duration-200"
              >
                <img src={exp.logo} alt={exp.company + ' logo'} className="w-16 h-16 object-contain rounded-full border border-[#e3eaf3] bg-[#f5f9fc]" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#1a365d] mb-1">{exp.title}</h2>
                  <p className="text-md text-[#3b5b7e] font-medium mb-1">{exp.company} {exp.type && `· ${exp.type}`}</p>
                  <p className="text-sm text-[#6b7a90] mb-2">{exp.date} {exp.location && `· ${exp.location}`}</p>
                  {exp.missions && (
                    <ul className="list-disc pl-5 mt-2 text-[#1a365d] text-sm">
                      {exp.missions.map((mission, i) => (
                        <li key={i}>{mission}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
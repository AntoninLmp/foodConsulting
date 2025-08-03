import Footer from "../Footer";
import Navbar from "../Navbar";

type Service = {
  title: string;
  sousTitle?: string;
  description?: string;
  services: Array<{ title: string; points: string[] }>;
};

function ServiceDescription({ title, sousTitle, description, services }: Service) {
  return (
    <>
      <Navbar colors="bg-[#f5f9fc]"/>
      <div className="min-h-screen bg-gradient-to-b from-[#f5f9fc] to-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-extrabold text-center text-white bg-[#286C91] px-6 py-6 rounded-2xl shadow-md w-fit mx-auto mb-10">
            {title}
          </h1>

          {sousTitle && <h2 className="text-3xl font-semibold text-center text-[#286C91] mb-4">{sousTitle}</h2>}

          {description && (
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{description}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#286C91] hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-[#286C91] mb-4 italic">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="text-start">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServiceDescription;

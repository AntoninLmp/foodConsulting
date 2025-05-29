import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="text-gray-800">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue sur mon site vitrine
        </h1>
        <p className="text-xl text-center">
          Ici, je présente mes projets, mes services et comment me contacter.
        </p>
      </section>
    </>
  );
}

export default Home;

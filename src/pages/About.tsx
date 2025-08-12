import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar colors="bg-[#f5f9fc]"/>
      <div className="min-h-svh bg-gradient-to-b from-[#f5f9fc] to-white">
        <h1 className="text-3xl pt-50 font-bold">En cours de développement</h1>
        <p>Nous travaillons dur pour vous apporter la meilleure expérience possible.</p>
      </div>
      <Footer />
    </>
  );
}
export default About;
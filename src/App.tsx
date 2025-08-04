import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Pricing from './pages/pricing';
import Gestion from './pages/Services/Gestion';
import HumainRessources from './pages/Services/HumainRessources';
import TransformationLocaux from './pages/Services/TransformationLocaux';
import AppelOffres from './pages/Services/AppelOffres';
import HygieneEtSecurite from './pages/Services/SecurityHygiene';
import ControleGestion from './pages/Services/ControleGestion';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/ressources-humaines" element={<HumainRessources />} />
        <Route path="/hygiene-et-securite" element={<HygieneEtSecurite />} />
        <Route path="/controle-de-gestion" element={<ControleGestion />} />
        <Route path="/transformation" element={<TransformationLocaux />} />
        <Route path="/appel-offres" element={<AppelOffres />} />
      </Routes>
    </Router>
  );
}

export default App

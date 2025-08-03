import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Pricing from './pages/pricing';
import Gestion from './pages/Services/Gestion';
import HumainRessources from './pages/Services/HumainRessources';
import TransformationLocaux from './pages/Services/TransformationLocaux';
import AppelOffres from './pages/Services/AppelOffres';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/RessourcesHumaines" element={<HumainRessources />} />
        <Route path="/transformation" element={<TransformationLocaux />} />
        <Route path="/appelOffres" element={<AppelOffres />} />
      </Routes>
    </Router>
  );
}

export default App

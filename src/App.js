import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Guarantees from './components/Guarantees';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import StudentProjects from './components/StudentProjects';

// Main website component
const MainWebsite = () => (
  <div className="App">
    <Hero />
    <Services />
    <Features />
    <Portfolio />
    <Pricing />
    <Guarantees />
    <About />
    <Team />
    <Contact />
    <Footer />
    <WhatsAppWidget />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/student-projects" element={<StudentProjects />} />
        <Route path="/academic-solutions" element={<StudentProjects />} />
        <Route path="/final-year-projects" element={<StudentProjects />} />
      </Routes>
    </Router>
  );
}

export default App;

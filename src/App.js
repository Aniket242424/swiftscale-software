import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Guarantees from './components/Guarantees';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Pricing />
      <Guarantees />
      <About />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

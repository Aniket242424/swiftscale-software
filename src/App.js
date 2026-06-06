import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import CareerAffiliate from './components/CareerAffiliate';
import Navbar from './components/Navbar';
import { PrivacyPolicy, TermsOfService, CookiePolicy, NotFound } from './components/Legal';
import ServicesPage from './pages/Services';

// Scroll to top on route change (skip if URL has a hash anchor)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// About page — standalone route
const AboutPage = () => (
  <div className="App">
    <div className="relative bg-navy">
      <Navbar />
    </div>
    <About />
    <Footer />
    <WhatsAppWidget />
  </div>
);

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/student-projects" element={<StudentProjects />} />
        <Route path="/academic-solutions" element={<StudentProjects />} />
        <Route path="/final-year-projects" element={<StudentProjects />} />
        <Route path="/careers" element={<CareerAffiliate />} />
        <Route path="/affiliate" element={<CareerAffiliate />} />
        <Route path="/join-us" element={<CareerAffiliate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

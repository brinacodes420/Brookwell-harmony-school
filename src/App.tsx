
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Academics from './components/Academics';
import WhyBrookwell from './components/WhyBrookwell';
import LifeAtBrookwell from './components/LifeAtBrookwell';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Parents from './components/Parents';
import AboutBrookwellPage from './components/AboutBrookwellPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Academics />
      <WhyBrookwell />
      <LifeAtBrookwell />
      <Gallery />
      <Parents />
      <Testimonials />
      <Admissions />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutBrookwellPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

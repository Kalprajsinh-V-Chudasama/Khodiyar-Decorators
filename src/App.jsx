import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceStrip from './components/ServiceStrip';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Portfolio from './components/Portfolio';
import DarkServices from './components/DarkServices';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WeddingDetail from './components/WeddingDetail';
import BirthdayDetail from './components/BirthdayDetail';
import CorporateDetail from './components/CorporateDetail';
import SocialDetail from './components/SocialDetail';

const detailComponents = {
  'Weddings': WeddingDetail,
  'Corporate Events': CorporateDetail,
  'Birthdays': BirthdayDetail,
  'Birthdays & Private Parties': BirthdayDetail,
  'Social Gatherings': SocialDetail,
  'Social & Community Events': SocialDetail,
};

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const contactRef = useRef(null);

  const handleBack = (scrollToContact) => {
    setSelectedEvent(null);
    if (scrollToContact) {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const DetailComponent = selectedEvent ? detailComponents[selectedEvent] : null;

  if (DetailComponent) {
    return (
      <>
        <Navbar />
        <DetailComponent onBack={handleBack} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceStrip onSelectEvent={setSelectedEvent} />
        <WhyChooseUs />
        <About />
        <Portfolio onSelectEvent={setSelectedEvent} />
        <DarkServices />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

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

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceStrip />
        <WhyChooseUs />
        <About />
        <Portfolio />
        <DarkServices />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

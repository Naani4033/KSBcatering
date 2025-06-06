import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import UniqueFeatures from './components/UniqueFeatures';
import EventTypes from './components/EventTypes';
 // import Gallery from './components/Gallery';
//  import Testimonials from './components/Testimonials';
 import SocialConnect from './components/SocialConnect';
 import AdditionalServices from './components/AdditionalServices';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();
  
  // Update document title based on language
  React.useEffect(() => {
    document.title = t('siteTitle');
  }, [t]);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <UniqueFeatures />
      <EventTypes />
{/*       <Gallery /> */}
      {/* <Testimonials /> */}
      <SocialConnect />
      <AdditionalServices />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

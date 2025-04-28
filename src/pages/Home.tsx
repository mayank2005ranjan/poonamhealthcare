
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import DoctorsSection from '@/components/home/DoctorsSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import AppointmentSection from '@/components/home/AppointmentSection';
import UpdatesSection from '@/components/home/UpdatesSection';
import LocationSection from '@/components/home/LocationSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import FAQSection from '@/components/home/FAQSection';
import ContactBanner from '@/components/home/ContactBanner';
import Footer from '@/components/Footer';

const Home = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutPreview />
        <DoctorsSection />
        <ServicesPreview />
        <AppointmentSection />
        <UpdatesSection />
        <LocationSection />
        <TestimonialsSection />
        <GalleryPreview />
        <FAQSection />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

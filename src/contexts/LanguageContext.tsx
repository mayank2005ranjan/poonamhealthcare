
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

// Updated type definition to allow for nested structures
type TranslationValue = Record<Language, string> | Record<string, Record<Language, string>>;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, TranslationValue>;
};

const translations = {
  home: {
    en: 'Home',
    hi: 'होम',
  },
  about: {
    en: 'About Us',
    hi: 'हमारे बारे में',
  },
  services: {
    en: 'Our Services',
    hi: 'हमारी सेवाएं',
  },
  appointment: {
    en: 'Book Appointment',
    hi: 'अपॉइंटमेंट बुक करें',
  },
  pharmacy: {
    en: 'Pharmacy',
    hi: 'फार्मेसी',
  },
  contact: {
    en: 'Contact',
    hi: 'संपर्क करें',
  },
  welcomeMessage: {
    en: 'Providing Quality Healthcare Services',
    hi: 'गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करना',
  },
  welcomeSubtext: {
    en: 'Your health is our priority. Experience world-class medical care.',
    hi: 'आपका स्वास्थ्य हमारी प्राथमिकता है। विश्व स्तरीय चिकित्सा देखभाल का अनुभव करें।',
  },
  heroHeading: {
    en: 'Your Trusted Partner in Health and Wellness',
    hi: 'स्वास्थ्य और कल्याण में आपका विश्वसनीय साथी',
  },
  heroSubheading: {
    en: 'Expert Care | Trusted Doctors | Compassionate Service',
    hi: 'विशेषज्ञ देखभाल | विश्वसनीय डॉक्टर | करुणामय सेवा',
  },
  bookAppointment: {
    en: 'Book Appointment',
    hi: 'अपॉइंटमेंट बुक करें',
  },
  callNow: {
    en: 'Call Now',
    hi: 'अभी कॉल करें',
  },
  quickContact: {
    en: 'Need Assistance? Call us Now!',
    hi: 'सहायता चाहिए? अभी कॉल करें!',
  },
  footer: {
    quickLinks: {
      en: 'Quick Links',
      hi: 'त्वरित लिंक',
    },
    contactUs: {
      en: 'Contact Us',
      hi: 'संपर्क करें',
    },
    openingHours: {
      en: 'Opening Hours',
      hi: 'खुलने का समय',
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

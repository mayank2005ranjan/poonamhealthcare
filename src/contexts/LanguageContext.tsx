
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

// Define a more precise type for translations
type TranslationValue = string | Record<Language, string> | Record<string, Record<Language, string>>;

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
  teamHelp: {
    en: 'Our team is here to help you',
    hi: 'हमारी टीम आपकी मदद के लिए यहाँ है',
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
  footerTagline: {
    en: 'Your trusted partner in health and wellness.',
    hi: 'स्वास्थ्य और कल्याण में आपका विश्वसनीय साथी।',
  },
  weekdays: {
    en: 'Monday - Saturday',
    hi: 'सोमवार - शनिवार',
  },
  hours: {
    en: '9:00 AM - 8:00 PM',
    hi: 'सुबह 9:00 बजे - शाम 8:00 बजे',
  },
  emergency: {
    en: 'Emergency: 24/7',
    hi: 'आपातकालीन: 24/7',
  },
  rightsReserved: {
    en: 'All rights reserved.',
    hi: 'सर्वाधिकार सुरक्षित।',
  },
  findUs: {
    en: 'Find Us',
    hi: 'हमें ढूंढें',
  },
  visitLocation: {
    en: 'Visit our location in Jhanjharpur',
    hi: 'झंझारपुर में हमारे स्थान पर जाएँ',
  },
  getDirections: {
    en: 'Get Directions',
    hi: 'रास्ता पाएं',
  },
  latestUpdates: {
    en: 'Latest Updates',
    hi: 'नवीनतम अपडेट',
  },
  stayInformed: {
    en: 'Stay informed about our services and events',
    hi: 'हमारी सेवाओं और कार्यक्रमों के बारे में जानकारी प्राप्त करें',
  },
  updates: {
    eyeCamp: {
      en: 'Free Eye Camp on 5th May!',
      hi: '5 मई को निःशुल्क आंख शिविर!',
    },
    eyeCampDate: {
      en: 'April 20, 2025',
      hi: '20 अप्रैल, 2025',
    },
    diabetes: {
      en: 'New Diabetes Specialist Available',
      hi: 'नए मधुमेह विशेषज्ञ उपलब्ध',
    },
    diabetesDate: {
      en: 'April 15, 2025',
      hi: '15 अप्रैल, 2025',
    },
    blood: {
      en: 'Emergency Blood Collection Service started',
      hi: 'आपातकालीन रक्त संग्रह सेवा शुरू की गई',
    },
    bloodDate: {
      en: 'April 10, 2025',
      hi: '10 अप्रैल, 2025',
    },
  }
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


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="min-h-screen bg-hospital-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-hospital-primary mb-4">
            {translations.welcomeMessage[language]}
          </h1>
          <p className="text-xl text-hospital-text mt-4">
            {translations.welcomeSubtext[language]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

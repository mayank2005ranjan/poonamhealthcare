
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactBanner = () => {
  const { language, translations } = useLanguage();
  
  // Create helper function to safely get translated string
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      if (language in translation) {
        return String(translation[language]) || defaultValue;
      }
      return defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };
  
  const quickContactText = getTranslation('quickContact', "Need Assistance? Call us Now!");
  const callNowText = getTranslation('callNow', "Call Now");

  return (
    <section className="py-12 bg-hospital-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{quickContactText}</h2>
            <p className="text-xl">{getTranslation('teamHelp', 'Our team is here to help you')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9534800801">
              <Button variant="secondary" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                {callNowText}
              </Button>
            </a>
            
            <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-hospital-primary">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

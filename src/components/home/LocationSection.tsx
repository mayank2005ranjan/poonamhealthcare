
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationSection = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      return language in translation ? String(translation[language] || defaultValue) : defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  // Updated Google Maps URL with the new location
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.880430694033!2d86.27569737640374!3d26.262805583422843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee78c78e1897cd%3A0x9f4da0b66d66f93e!2sPoonam%20Health%20Care!5e0!3m2!1sen!2sin!4v1714289692756!5m2!1sen!2sin";

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/place/Poonam+Health+Care/@26.2628056,86.2778856,17z", "_blank");
  };

  return (
    <section className="py-16 bg-hospital-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-primary mb-2">{getTranslation('findUs', 'Find Us')}</h2>
          <p className="text-hospital-text">{getTranslation('visitLocation', 'Visit our location in Jhanjharpur')}</p>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden shadow-md mb-6" style={{ height: '400px' }}>
          <iframe 
            src={googleMapsUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Poonam Health Care Location"
          ></iframe>
        </div>
        
        <div className="text-center">
          <p className="text-hospital-text mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-hospital-accent" />
            Ward Number 9, Jhanjharpur, Bihar 847404
          </p>
          
          <Button onClick={handleGetDirections} className="gap-2 bg-hospital-primary hover:bg-hospital-primary/90">
            <MapPin className="h-4 w-4" />
            {getTranslation('getDirections', 'Get Directions')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

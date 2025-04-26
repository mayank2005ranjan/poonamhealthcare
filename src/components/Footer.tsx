
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      // Handle nested objects like footer.quickLinks
      if (key.includes('.')) {
        const [parent, child] = key.split('.');
        const parentObj = translations[parent];
        if (typeof parentObj === 'object' && parentObj !== null && child in parentObj) {
          const childObj = parentObj[child];
          if (typeof childObj === 'object' && childObj !== null && language in childObj) {
            return childObj[language] || defaultValue;
          }
        }
        return defaultValue;
      }
      // Handle non-nested objects with language keys
      if (language in translation) {
        const value = translation[language];
        return typeof value === 'string' ? value : defaultValue;
      }
      return defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  return (
    <footer className="bg-hospital-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Poonam Health Care</h3>
            <p className="text-gray-300">{getTranslation('footerTagline', 'Your trusted partner in health and wellness.')}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.quickLinks', 'Quick Links')}</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white">
                {getTranslation('home', 'Home')}
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white">
                {getTranslation('about', 'About Us')}
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white">
                {getTranslation('services', 'Our Services')}
              </Link>
              <Link to="/appointment" className="block text-gray-300 hover:text-white">
                {getTranslation('appointment', 'Book Appointment')}
              </Link>
              <Link to="/pharmacy" className="block text-gray-300 hover:text-white">
                {getTranslation('pharmacy', 'Pharmacy')}
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white">
                {getTranslation('contact', 'Contact')}
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.contactUs', 'Contact Us')}</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1234567890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@poonamhealthcare.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ward Number 9, Jhanjharpur, Bihar 847404
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{getTranslation('footer.openingHours', 'Opening Hours')}</h4>
            <div className="space-y-2 text-gray-300">
              <p>{getTranslation('weekdays', 'Monday - Saturday')}</p>
              <p>{getTranslation('hours', '9:00 AM - 8:00 PM')}</p>
              <p className="text-hospital-accent">{getTranslation('emergency', 'Emergency: 24/7')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Poonam Health Care. {getTranslation('rightsReserved', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

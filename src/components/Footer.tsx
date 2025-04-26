
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, translations } = useLanguage();
  const footerTranslations = translations.footer as Record<string, Record<'en' | 'hi', string>>;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Poonam Health Care</h3>
            <p className="text-gray-400">Your trusted partner in health and wellness.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{footerTranslations.quickLinks[language]}</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">
                {translations.home[language as keyof typeof translations.home]}
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">
                {translations.about[language as keyof typeof translations.about]}
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">
                {translations.services[language as keyof typeof translations.services]}
              </Link>
              <Link to="/appointment" className="block text-gray-400 hover:text-white">
                {translations.appointment[language as keyof typeof translations.appointment]}
              </Link>
              <Link to="/pharmacy" className="block text-gray-400 hover:text-white">
                {translations.pharmacy[language as keyof typeof translations.pharmacy]}
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">
                {translations.contact[language as keyof typeof translations.contact]}
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{footerTranslations.contactUs[language]}</h4>
            <div className="space-y-2 text-gray-400">
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
                123 Health Street, Jhanjharpur
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{footerTranslations.openingHours[language]}</h4>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 8:00 PM</p>
              <p className="text-yellow-400">Emergency: 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Poonam Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

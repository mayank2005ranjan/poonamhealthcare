
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-hospital-primary">
            Poonam Health Care
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-hospital-primary transition-colors">
              {translations.home[language]}
            </Link>
            <Link to="/about" className="hover:text-hospital-primary transition-colors">
              {translations.about[language]}
            </Link>
            <Link to="/services" className="hover:text-hospital-primary transition-colors">
              {translations.services[language]}
            </Link>
            <Link to="/appointment" className="hover:text-hospital-primary transition-colors">
              {translations.appointment[language]}
            </Link>
            <Link to="/pharmacy" className="hover:text-hospital-primary transition-colors">
              {translations.pharmacy[language]}
            </Link>
            <Link to="/contact" className="hover:text-hospital-primary transition-colors">
              {translations.contact[language]}
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Call Now Button */}
      <a
        href="tel:+1234567890"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      >
        <Phone className="h-6 w-6" />
      </a>
    </nav>
  );
};

export default Navbar;

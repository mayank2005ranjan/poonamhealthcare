
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <nav className="bg-hospital-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Swasthya
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-hospital-secondary transition-colors">
              {translations.home[language]}
            </Link>
            <Link to="/about" className="hover:text-hospital-secondary transition-colors">
              {translations.about[language]}
            </Link>
            <Link to="/services" className="hover:text-hospital-secondary transition-colors">
              {translations.services[language]}
            </Link>
            <Link to="/appointment" className="hover:text-hospital-secondary transition-colors">
              {translations.appointment[language]}
            </Link>
            <Link to="/pharmacy" className="hover:text-hospital-secondary transition-colors">
              {translations.pharmacy[language]}
            </Link>
            <Link to="/contact" className="hover:text-hospital-secondary transition-colors">
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
    </nav>
  );
};

export default Navbar;

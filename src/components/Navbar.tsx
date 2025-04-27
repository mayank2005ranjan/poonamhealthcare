
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Phone, Menu } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Helper function to safely extract string values from translations
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Active link style
  const activeLinkClass = "text-hospital-primary font-semibold border-b-2 border-hospital-primary";
  const normalLinkClass = "text-hospital-text hover:text-hospital-primary transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo */}
            <div className="h-10 w-10">
              <img 
                src="/logo.png" 
                alt="PHC Logo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%230B2C5F" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v2"></path><path d="M16 3v2"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path><rect x="3" y="5" width="18" height="16" rx="2"></rect></svg>';
                }}
              />
            </div>
            <span className="text-xl font-bold text-hospital-primary">
              Poonam Health Care
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-hospital-primary"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={isActive('/') ? activeLinkClass : normalLinkClass}>
              {getTranslation('home', 'Home')}
            </Link>
            <Link to="/about" className={isActive('/about') ? activeLinkClass : normalLinkClass}>
              {getTranslation('about', 'About Us')}
            </Link>
            <Link to="/services" className={isActive('/services') ? activeLinkClass : normalLinkClass}>
              {getTranslation('services', 'Our Services')}
            </Link>
            <Link to="/appointment" className={isActive('/appointment') ? activeLinkClass : normalLinkClass}>
              {getTranslation('appointment', 'Book Appointment')}
            </Link>
            <Link to="/pharmacy" className={isActive('/pharmacy') ? activeLinkClass : normalLinkClass}>
              {getTranslation('pharmacy', 'Pharmacy')}
            </Link>
            <Link to="/contact" className={isActive('/contact') ? activeLinkClass : normalLinkClass}>
              {getTranslation('contact', 'Contact')}
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
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/" 
                className={isActive('/') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('home', 'Home')}
              </Link>
              <Link 
                to="/about" 
                className={isActive('/about') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('about', 'About Us')}
              </Link>
              <Link 
                to="/services" 
                className={isActive('/services') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('services', 'Our Services')}
              </Link>
              <Link 
                to="/appointment" 
                className={isActive('/appointment') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('appointment', 'Book Appointment')}
              </Link>
              <Link 
                to="/pharmacy" 
                className={isActive('/pharmacy') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('pharmacy', 'Pharmacy')}
              </Link>
              <Link 
                to="/contact" 
                className={isActive('/contact') 
                  ? "text-hospital-primary font-semibold" 
                  : "text-hospital-text hover:text-hospital-primary transition-colors"} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {getTranslation('contact', 'Contact')}
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setLanguage(language === 'en' ? 'hi' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-start gap-2 p-0"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'हिंदी' : 'English'}
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Floating Call Now Button */}
      <a
        href="tel:9534800801"
        className="fixed bottom-6 right-6 bg-hospital-accent text-white rounded-full p-3 shadow-lg hover:bg-hospital-accent/90 transition-colors"
      >
        <Phone className="h-6 w-6" />
      </a>
    </nav>
  );
};

export default Navbar;

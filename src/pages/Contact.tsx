
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const Contact = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
    
    // Replace 'contact.' with 'contactPage.' to match our updated structure
    if (parts[0] === 'contact') {
      parts[0] = 'contactPage';
    }
    
    const newKey = parts.join('.');
    let current: any = translations;
    
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return defaultValue;
      }
    }
    
    if (typeof current === 'object' && language in current) {
      return String(current[language] || defaultValue);
    }
    
    return typeof current === 'string' ? current : defaultValue;
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('contact.hero.title', 'Get In Touch With Us')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('contact.hero.subtitle', "We're here to help you with your health needs. Contact us easily below!")}
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Side: Contact Button */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-hospital-primary mb-6">
                  {getTranslation('contact.callUs.title', 'Call Us Directly')}
                </h2>
                
                <a href="tel:9534800801">
                  <Button 
                    size="lg" 
                    className="py-8 px-16 text-xl flex items-center gap-3 bg-hospital-primary hover:bg-hospital-primary/90"
                  >
                    <Phone className="h-6 w-6" />
                    9534800801
                  </Button>
                </a>
              </div>
              
              {/* Right Side: Contact Information */}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-50 rounded-lg shadow-md p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-hospital-primary mb-1">
                          {getTranslation('contact.address.title', 'Address')}
                        </h3>
                        <p className="text-gray-600">
                          Ward Number 9, Jhanjharpur, Bihar, India - 847404
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-hospital-primary mb-1">
                          {getTranslation('contact.email.title', 'Email')}
                        </h3>
                        <a href="mailto:support.phc@gmail.com" className="text-gray-600 hover:text-hospital-primary">
                          support.phc@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MessageCircle className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-hospital-primary mb-1">
                          {getTranslation('contact.whatsapp.title', 'WhatsApp')}
                        </h3>
                        <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-hospital-primary">
                          9534800801
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-hospital-primary mb-1">
                          {getTranslation('contact.timings.title', 'Timings')}
                        </h3>
                        <p className="text-gray-600">
                          24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Google Map Embed */}
        <section className="bg-white pb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-hospital-primary mb-6 text-center">
              {getTranslation('contact.location.title', 'Our Location')}
            </h2>
            
            <div className="w-full rounded-lg overflow-hidden shadow-md mb-6" style={{ height: '500px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.880430694033!2d86.27569737640374!3d26.262805583422843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee78c78e1897cd%3A0x9f4da0b66d66f93e!2sPoonam%20Health%20Care!5e0!3m2!1sen!2sin!4v1714289692756!5m2!1sen!2sin" 
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
              <a href="https://maps.app.goo.gl/sX9iTDiR3Ydfuw6X7" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-hospital-primary hover:bg-hospital-primary/90">
                  <MapPin className="h-4 w-4" />
                  {getTranslation('contact.getDirections', 'Get Directions')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

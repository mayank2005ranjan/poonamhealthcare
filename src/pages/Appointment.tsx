
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, PhoneCall, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const Appointment = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      return language in translation ? String(translation[language] || defaultValue) : defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Banner */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('appointment.hero.title', 'Book Your Appointment')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('appointment.hero.subtitle', 'Quick, Easy, and Hassle-Free Booking with Our Trusted Doctors.')}
            </p>
          </div>
        </section>
        
        {/* Two Column Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Left Side: UPI QR Code */}
              <div className="w-full md:w-1/2 max-w-md">
                <h2 className="text-2xl font-bold text-hospital-primary mb-6 text-center">
                  {getTranslation('appointment.payment.title', 'Scan and Pay Consultation Fees')}
                </h2>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="/qr-code.jpg" 
                    alt="UPI QR Code" 
                    className="w-full h-auto mx-auto mb-6"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/400x400?text=UPI+QR+Code';
                    }}
                  />
                  
                  <p className="text-gray-600 text-center mb-4">
                    {getTranslation('appointment.payment.instructions', 'After payment, please take a screenshot and click on "Book Appointment".')}
                  </p>
                  
                  <p className="text-gray-600 text-center font-medium">
                    {getTranslation('appointment.payment.walkIn', 'Walk-in and appointment through call are also available.')}
                  </p>
                  
                  <div className="mt-6 text-center">
                    <p className="text-hospital-accent font-medium">
                      {getTranslation('appointment.urgent.text', 'For urgent consultation, please call us directly.')}
                    </p>
                    <a href="tel:9534800801" className="inline-flex items-center text-hospital-primary font-bold mt-1">
                      <Phone className="h-4 w-4 mr-2" />
                      9534800801
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Book Appointment Button */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <a 
                  href="https://forms.gle/nEfrWy77hfEjVpzVA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button 
                    size="lg" 
                    className="w-full py-8 text-xl bg-hospital-accent hover:bg-hospital-accent/90"
                  >
                    {getTranslation('appointment.book.button', 'Book Appointment')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Contact Info */}
        <section className="py-12 bg-hospital-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <PhoneCall className="h-12 w-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('appointment.contact.phone', 'Call Us')}</h3>
                <a href="tel:9534800801" className="text-white hover:underline">
                  9534800801
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-12 w-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('appointment.contact.whatsapp', 'WhatsApp')}</h3>
                <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  9534800801
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('appointment.contact.address', 'Address')}</h3>
                <a href="https://maps.app.goo.gl/sX9iTDiR3Ydfuw6X7" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Ward Number 9, Jhanjharpur, Bihar 847404
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;

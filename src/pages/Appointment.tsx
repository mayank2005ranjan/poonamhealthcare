
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const Appointment = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
    
    // Replace 'appointment.' with 'appointmentPage.' to match our updated structure
    if (parts[0] === 'appointment') {
      parts[0] = 'appointmentPage';
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
              {getTranslation('appointment.hero.title', 'Book Your Appointment')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('appointment.hero.subtitle', 'Quick, Easy, and Hassle-Free Booking with Our Trusted Doctors.')}
            </p>
          </div>
        </section>

        {/* Appointment Section (Similar to Homepage) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="/qr-code.jpg" 
                  alt="Payment QR Code" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x400?text=UPI+QR+Code';
                  }}
                />
              </div>
              
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-6">
                  Schedule your appointment with our specialists today. Quick and easy booking process 
                  to save your valuable time.
                </p>
                
                <a href="https://forms.gle/61B9jdr785XrSh2D7" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </a>
                
                <p className="mt-4 text-sm text-gray-500">
                  Quick and Easy Booking! Scan the QR code for payment after confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Consultation Section */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-red-600 font-semibold">
              {getTranslation('appointment.urgent.text', 'For urgent consultation, please call us directly.')}
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Contact */}
              <div className="text-center">
                <Phone className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('appointment.contact.phone', 'Call Us')}
                </h3>
                <p>9534800801</p>
              </div>

              {/* WhatsApp Contact */}
              <div className="text-center">
                <MessageCircle className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('appointment.contact.whatsapp', 'WhatsApp')}
                </h3>
                <p>9534800801</p>
              </div>

              {/* Address */}
              <div className="text-center">
                <MapPin className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('appointment.contact.address', 'Address')}
                </h3>
                <p>Ward Number 9, Jhanjharpur, Bihar 847404</p>
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

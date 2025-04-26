import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
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

        {/* Payment Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-hospital-primary mb-4">
                {getTranslation('appointment.payment.title', 'Scan and Pay Consultation Fees')}
              </h2>
              <img
                src="/qr-code.png"
                alt="QR Code"
                className="mx-auto mb-4 rounded-lg shadow-md"
                style={{ maxWidth: '300px' }}
              />
              <p className="text-gray-600 mb-6">
                {getTranslation('appointment.payment.instructions', 'After payment, please take a screenshot and click on "Book Appointment".')}
              </p>
              <p className="text-sm text-gray-500">
                {getTranslation('appointment.payment.walkIn', 'Walk-in and appointment through call are also available.')}
              </p>
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

        {/* Book Appointment Button */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Button className="bg-hospital-primary hover:bg-hospital-primary/90">
              {getTranslation('appointment.book.button', 'Book Appointment')}
            </Button>
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

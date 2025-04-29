
import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Calendar, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Appointment = () => {
  const { language, translations } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
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
            <h1 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('appointmentPage.hero.title', 'Book Your Appointment')}
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {getTranslation('appointmentPage.hero.subtitle', 'Quick, Easy, and Hassle-Free Booking with Our Trusted Doctors.')}
            </p>
          </div>
        </section>
        
        {/* Payment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-hospital-primary mb-6 text-center">
                {getTranslation('appointmentPage.payment.title', 'Scan and Pay Consultation Fees')}
              </h2>
              
              <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src="/qr-code.jpg" 
                    alt="UPI QR Code" 
                    className="max-w-xs rounded shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/300x300?text=QR+Code';
                    }}
                  />
                </div>
                
                <div className="w-full md:w-1/2">
                  <p className="text-gray-700 mb-6">
                    {getTranslation('appointmentPage.payment.instructions', 'After payment, please take a screenshot and click on "Book Appointment".')}
                  </p>
                  
                  <Button size="lg" className="w-full bg-hospital-primary hover:bg-hospital-primary/90">
                    {getTranslation('appointmentPage.book.button', 'Book Appointment')}
                  </Button>
                  
                  <p className="text-gray-500 mt-4 text-sm">
                    {getTranslation('appointmentPage.payment.walkIn', 'Walk-in and appointment through call are also available.')}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-hospital-secondary/20 p-4 rounded-lg text-center">
                <p className="font-medium">
                  {getTranslation('appointmentPage.urgent.text', 'For urgent consultation, please call us directly.')}
                </p>
                <a href="tel:9534800801" className="text-hospital-accent font-bold text-lg hover:underline">
                  9534800801
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Appointment Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-hospital-primary mb-10">
              {getTranslation('appointmentPage.appointmentProcess.title', 'Appointment Process')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-hospital-secondary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4 mx-auto">1</div>
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('appointmentPage.appointmentProcess.step1.title', 'Scan & Pay')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('appointmentPage.appointmentProcess.step1.description', 'Scan our UPI QR code and complete the consultation fee payment.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4 mx-auto">2</div>
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('appointmentPage.appointmentProcess.step2.title', 'Save Payment Proof')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('appointmentPage.appointmentProcess.step2.description', 'Take a screenshot of the successful payment.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4 mx-auto">3</div>
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('appointmentPage.appointmentProcess.step3.title', 'Book Your Appointment')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('appointmentPage.appointmentProcess.step3.description', 'Click the "Book Appointment" and fill out the form.')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-hospital-secondary/10 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-hospital-primary mb-3">
                  {getTranslation('appointmentPage.contact.phone', 'Call Us')}
                </h3>
                <div className="flex justify-center mb-3">
                  <Phone className="h-6 w-6 text-hospital-accent" />
                </div>
                <a href="tel:9534800801" className="text-hospital-text hover:text-hospital-primary">
                  9534800801
                </a>
              </div>
              
              <div className="bg-hospital-secondary/10 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-hospital-primary mb-3">
                  {getTranslation('appointmentPage.contact.whatsapp', 'WhatsApp')}
                </h3>
                <div className="flex justify-center mb-3">
                  <Globe className="h-6 w-6 text-hospital-accent" />
                </div>
                <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer" className="text-hospital-text hover:text-hospital-primary">
                  9534800801
                </a>
              </div>
              
              <div className="bg-hospital-secondary/10 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-hospital-primary mb-3">
                  {getTranslation('appointmentPage.contact.address', 'Address')}
                </h3>
                <div className="flex justify-center mb-3">
                  <Calendar className="h-6 w-6 text-hospital-accent" />
                </div>
                <p className="text-hospital-text">
                  Ward Number 9, Jhanjharpur, Bihar 847404
                </p>
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


import React from 'react';
import { Button } from '@/components/ui/button';
import { Pill, Phone, Truck, Clock, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Pharmacy = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      return language in translation ? String(translation[language] || defaultValue) : defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  const features: Feature[] = [
    {
      id: 1,
      title: getTranslation('pharmacy.features.range.title', 'Wide Range of Medicines'),
      description: getTranslation('pharmacy.features.range.description', 'All essential medicines available at our in-house pharmacy.'),
      icon: <Pill className="h-10 w-10 text-hospital-accent" />
    },
    {
      id: 2,
      title: getTranslation('pharmacy.features.delivery.title', 'Free Home Delivery'),
      description: getTranslation('pharmacy.features.delivery.description', 'Free delivery of medicines within 3 km radius.'),
      icon: <Truck className="h-10 w-10 text-hospital-accent" />
    },
    {
      id: 3,
      title: getTranslation('pharmacy.features.processing.title', 'Quick Processing'),
      description: getTranslation('pharmacy.features.processing.description', 'Fast service to ensure you get your medicines on time.'),
      icon: <Clock className="h-10 w-10 text-hospital-accent" />
    },
    {
      id: 4,
      title: getTranslation('pharmacy.features.quality.title', 'Quality Guaranteed'),
      description: getTranslation('pharmacy.features.quality.description', 'Only trusted and verified brands supplied.'),
      icon: <Check className="h-10 w-10 text-hospital-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('pharmacy.hero.title', 'Poonam Health Care Pharmacy')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('pharmacy.hero.subtitle', 'Easy Access to Trusted Medicines — Delivered to Your Doorstep')}
            </p>
          </div>
        </section>
        
        {/* Our Pharmacy Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-10 text-center">
              {getTranslation('pharmacy.services.title', 'Our Pharmacy Services')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.id} className="border-2 border-hospital-secondary/20">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="p-3 rounded-full bg-hospital-secondary/20">
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-hospital-primary mb-2 text-center md:text-left">{feature.title}</h3>
                      <p className="text-gray-600 text-center md:text-left">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How to Order */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-10 text-center">
              {getTranslation('pharmacy.howToOrder.title', 'How to Order?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-hospital-primary text-white flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.howToOrder.step1.title', 'Call or WhatsApp')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.howToOrder.step1.description', 'Call or WhatsApp your prescription to our number.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-hospital-primary text-white flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.howToOrder.step2.title', 'Confirm Details')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.howToOrder.step2.description', 'Confirm your address and availability.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-hospital-primary text-white flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.howToOrder.step3.title', 'Receive Medicines')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.howToOrder.step3.description', 'Receive your Medicines — quick, free delivery under 3 kms!')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Free Delivery Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-hospital-secondary/20 p-8 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-hospital-primary mb-6 text-center">
                {getTranslation('pharmacy.delivery.title', 'Free Delivery Information')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.delivery.area.title', 'Service Area')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.delivery.area.description', 'Within 3 kilometers from our hospital.')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.delivery.time.title', 'Delivery Time')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.delivery.time.description', 'Within 24 hours after order confirmation.')}
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.delivery.timing.title', 'Pharmacy Timing')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.delivery.timing.description', '24/7')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Promotions */}
        <section className="py-8 bg-hospital-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-0">
              {getTranslation('pharmacy.promotions.title', '10-20% OFF on All Surgical Items')}
            </h2>
          </div>
        </section>
        
        {/* Order Now Button */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-hospital-primary mb-6">
              {getTranslation('pharmacy.orderNow.title', 'Ready to Order Medicines?')}
            </h2>
            
            <a href="tel:9534800801">
              <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90 py-6 px-12 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                {getTranslation('pharmacy.orderNow.button', 'Order Medicines Now')}
              </Button>
            </a>
            
            <p className="mt-4 text-gray-600">
              {getTranslation('pharmacy.orderNow.phone', 'Call: 9534800801')}
            </p>
          </div>
        </section>
        
        {/* Quick Contact Section */}
        <section className="py-12 bg-hospital-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Phone className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('pharmacy.contact.phone', 'Call Us')}</h3>
                <a href="tel:9534800801" className="text-white hover:underline">
                  9534800801
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('pharmacy.contact.whatsapp', 'WhatsApp')}</h3>
                <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  9534800801
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xl mb-2">{getTranslation('pharmacy.contact.address', 'Visit Us')}</h3>
                <a href="https://maps.app.goo.gl/sX9iTDiR3Ydfuw6X7" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Ward Number 9, Jhanjharpur
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

export default Pharmacy;

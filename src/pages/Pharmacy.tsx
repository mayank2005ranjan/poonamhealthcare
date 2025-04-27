
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const Pharmacy = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
    
    // Replace 'pharmacy.' with 'pharmacyPage.' to match our updated structure
    if (parts[0] === 'pharmacy') {
      parts[0] = 'pharmacyPage';
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
              {getTranslation('pharmacy.hero.title', 'Poonam Health Care Pharmacy')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('pharmacy.hero.subtitle', 'Easy Access to Trusted Medicines — Delivered to Your Doorstep')}
            </p>
          </div>
        </section>

        {/* Pharmacy Services Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('pharmacy.services.title', 'Our Pharmacy Services')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 text-hospital-accent">📦</div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.features.range.title', 'Wide Range of Medicines')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.features.range.description', 'All essential medicines available at our in-house pharmacy.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 text-hospital-accent">🚚</div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.features.delivery.title', 'Free Home Delivery')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.features.delivery.description', 'Free delivery of medicines within 3 km radius.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 text-hospital-accent">⚡</div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.features.processing.title', 'Quick Processing')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.features.processing.description', 'Fast service to ensure you get your medicines on time.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 text-hospital-accent">✅</div>
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">
                    {getTranslation('pharmacy.features.quality.title', 'Quality Guaranteed')}
                  </h3>
                  <p className="text-gray-600">
                    {getTranslation('pharmacy.features.quality.description', 'Only trusted and verified brands supplied.')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Order Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('pharmacy.howToOrder.title', 'How to Order?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-hospital-secondary flex items-center justify-center text-2xl mb-4">1</div>
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.howToOrder.step1.title', 'Call or WhatsApp')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.howToOrder.step1.description', 'Call or WhatsApp your prescription to our number.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-hospital-secondary flex items-center justify-center text-2xl mb-4">2</div>
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.howToOrder.step2.title', 'Confirm Details')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.howToOrder.step2.description', 'Confirm your address and availability.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-hospital-secondary flex items-center justify-center text-2xl mb-4">3</div>
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

        {/* Order Now Button - Added as requested above Free Delivery section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-hospital-primary mb-4">
              {getTranslation('pharmacy.orderNow.title', 'Ready to Order Medicines?')}
            </h2>
            <a href="tel:9534800801" className="inline-block">
              <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90 mb-2">
                {getTranslation('pharmacy.orderNow.button', 'Order Medicines Now')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-hospital-primary font-medium mt-2">
              {getTranslation('pharmacy.orderNow.phone', 'Call: 9534800801')}
            </p>
          </div>
        </section>
        
        {/* Free Delivery Information */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('pharmacy.delivery.title', 'Free Delivery Information')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.delivery.area.title', 'Service Area')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.delivery.area.description', 'Within 3 kilometers from our hospital.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.delivery.time.title', 'Delivery Time')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.delivery.time.description', 'Within 24 hours after order confirmation.')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.delivery.timing.title', 'Pharmacy Timing')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('pharmacy.delivery.timing.description', '24/7')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Promotions Section */}
        <section className="py-10 bg-hospital-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {getTranslation('pharmacy.promotions.title', '10-20% OFF on All Surgical Items')}
            </h2>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.contact.phone', 'Call Us')}
                </h3>
                <p>9534800801</p>
              </div>
              
              <div className="text-center">
                <MessageCircle className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.contact.whatsapp', 'WhatsApp')}
                </h3>
                <p>9534800801</p>
              </div>
              
              <div className="text-center">
                <MapPin className="mx-auto h-6 w-6 text-hospital-accent mb-2" />
                <h3 className="font-bold text-hospital-primary mb-2">
                  {getTranslation('pharmacy.contact.address', 'Visit Us')}
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

export default Pharmacy;

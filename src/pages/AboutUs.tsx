
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const { language, translations } = useLanguage();
  
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
        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('aboutUs.ourStory.title', 'Our Story')}
            </h2>
            
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="/hospital-reception.jpg" 
                  alt="Poonam Health Care Reception" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400?text=Poonam+Health+Care';
                  }}
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-hospital-primary">
                  {getTranslation('aboutUs.ourStory.howWeStarted.title', 'How Poonam Health Care Started')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getTranslation('aboutUs.ourStory.howWeStarted.content', 
                    'Poonam Health Care was founded with a simple yet powerful vision — to bring compassionate, quality healthcare closer to the people of Jhanjharpur and nearby areas. What began as a small initiative, driven by a deep sense of care for the community, has now grown into a trusted name for expert medical services. Our journey started with the belief that every individual deserves easy access to reliable doctors, essential medicines, and essential health support under one roof.'
                  )}
                </p>
                <p className="text-gray-600 mb-6">
                  {getTranslation('aboutUs.ourStory.howWeStarted.content2', 
                    'Inspired by the dream of making healthcare affordable and approachable, Poonam Health Care opened its doors with a team of dedicated professionals. Over time, we expanded our services to include specialized doctor consultations, pharmacy services with free delivery, and blood collection facilities — all designed to make your health journey smoother and safer. Today, we continue to grow with the same commitment: delivering trusted care with a human touch.'
                  )}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-hospital-primary">
                  {getTranslation('aboutUs.ourStory.vision.title', 'Our Vision')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getTranslation('aboutUs.ourStory.vision.content', 
                    "At Poonam Health Care, our vision is to become the most trusted healthcare partner for every family in Jhanjharpur and surrounding areas. We aspire to set new standards in community healthcare by delivering affordable, accessible, and compassionate medical services — ensuring that health and wellness are within everyone's reach."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('aboutUs.ourStory.values.title', 'Our Values')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-hospital-secondary/20 hover:border-hospital-accent transition-all">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('aboutUs.ourStory.values.compassion', 'Compassion First')}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aboutUs.ourStory.values.compassionDesc', 'Every patient is treated with warmth, kindness, and respect.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:border-hospital-accent transition-all">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('aboutUs.ourStory.values.integrity', 'Integrity Always')}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aboutUs.ourStory.values.integrityDesc', 'We maintain complete honesty and transparency in our services.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:border-hospital-accent transition-all">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('aboutUs.ourStory.values.excellence', 'Excellence in Care')}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aboutUs.ourStory.values.excellenceDesc', 'We constantly strive to improve the quality and efficiency of our medical services.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:border-hospital-accent transition-all">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('aboutUs.ourStory.values.community', 'Community Focus')}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aboutUs.ourStory.values.communityDesc', 'We believe healthcare should be available and affordable for everyone, especially at the local level.')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-hospital-secondary/20 hover:border-hospital-accent transition-all">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-hospital-primary mb-2">
                    {getTranslation('aboutUs.ourStory.values.innovation', 'Innovation and Growth')}
                  </h4>
                  <p className="text-gray-600">
                    {getTranslation('aboutUs.ourStory.values.innovationDesc', 'We embrace new medical advancements to offer the best care possible.')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Commitment Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-hospital-primary mb-6">
              {getTranslation('aboutUs.ourStory.commitment.title', 'Our Commitment to Patient Care')}
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              {getTranslation('aboutUs.ourStory.commitment.content', 
                'Poonam Health Care is built on a foundation of trust, empathy, and medical excellence. We are committed to offering personalized attention to every patient who walks through our doors. From experienced doctors across multiple specialties to our free pharmacy delivery and convenient appointment services — every touchpoint is designed with your comfort and well-being in mind.'
              )}
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto mt-4 font-medium">
              {getTranslation('aboutUs.ourStory.commitment.content2', 
                'Your health is our priority, and we are here to walk with you at every step of your healthcare journey.'
              )}
            </p>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('aboutUs.whyChoose.title', 'Why Choose Poonam Health Care?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.doctors', 'Experienced Doctors')}
                  </h4>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.facilities', 'Modern Facilities')}
                  </h4>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.delivery', 'Free Medicine Delivery')}
                  </h4>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.appointments', 'Convenient Online Appointments')}
                  </h4>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.care', 'Compassionate Care')}
                  </h4>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-hospital-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-text">
                    {getTranslation('aboutUs.whyChoose.pharmacy', 'In-house Pharmacy')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet Our Team Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-hospital-primary mb-4">
              {getTranslation('aboutUs.team.title', 'Meet Our Team')}
            </h2>
            <p className="text-gray-600 mb-8">
              {getTranslation('aboutUs.team.description', 'Behind every great hospital is a great team.')}
            </p>
            
            <Button variant="default" size="lg" className="bg-hospital-primary hover:bg-hospital-primary/90">
              {getTranslation('aboutUs.team.viewButton', 'View Our Team')}
            </Button>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-6 text-center">
              {getTranslation('aboutUs.gallery.title', 'Gallery')}
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              {getTranslation('aboutUs.gallery.description', 'Explore our facilities, services, and the people who make it special.')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <img 
                src="/hospital-reception.jpg" 
                alt="Hospital Reception" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Hospital+Reception';
                }}
              />
              <img 
                src="/doctor-consultation.jpg" 
                alt="Doctor Consultation" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Doctor+Consultation';
                }}
              />
              <img 
                src="/pharmacy-service.jpg" 
                alt="Pharmacy Service" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Pharmacy+Service';
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Quick Contact Section */}
        <section className="py-12 bg-hospital-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{getTranslation('aboutUs.contact.title', 'Need Health Advice?')}</h2>
                <p className="text-xl">{getTranslation('aboutUs.contact.callUs', 'Call Us!')}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:9534800801">
                  <Button variant="secondary" size="lg">
                    9534800801
                  </Button>
                </a>
                
                <a href="https://wa.me/9534800801" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-hospital-primary">
                    WhatsApp
                  </Button>
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

export default AboutUs;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Pill, Calendar, Eye, User, Activity, Heart, CheckSquare, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
    
    // Replace 'services.' with 'servicesPage.' to match our updated structure
    if (parts[0] === 'services') {
      parts[0] = 'servicesPage';
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

  interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  const services: Service[] = [
    {
      id: 1,
      title: getTranslation('services.bloodCollection.title', 'Blood Collection Facility'),
      description: getTranslation('services.bloodCollection.description', 'Hassle-free home blood sample collection for routine and special tests.'),
      icon: <Droplet className="w-12 h-12 text-red-500" />
    },
    {
      id: 2,
      title: getTranslation('services.pharmacy.title', 'Pharmacy (Free Delivery)'),
      description: getTranslation('services.pharmacy.description', 'Order medicines from our in-house pharmacy with free delivery under 3 kms.'),
      icon: <Pill className="w-12 h-12 text-green-500" />
    },
    {
      id: 3,
      title: getTranslation('services.eyeSpecialist.title', 'Eye Specialist Appointments'),
      description: getTranslation('services.eyeSpecialist.description', 'Comprehensive eye checkups, surgeries, and treatment from experienced specialists.'),
      icon: <Eye className="w-12 h-12 text-blue-500" />
    },
    {
      id: 4,
      title: getTranslation('services.gynecologist.title', 'Gynecologist Consultations'),
      description: getTranslation('services.gynecologist.description', "Expert women's healthcare for all stages of life."),
      icon: <User className="w-12 h-12 text-purple-500" />
    },
    {
      id: 5,
      title: getTranslation('services.diabetologist.title', 'Diabetologist Consultations'),
      description: getTranslation('services.diabetologist.description', 'Manage and control diabetes with personalized plans and guidance.'),
      icon: <Activity className="w-12 h-12 text-yellow-500" />
    },
    {
      id: 6,
      title: getTranslation('services.generalPhysician.title', 'General Physician Visits'),
      description: getTranslation('services.generalPhysician.description', 'From fever to infections, trusted care for everyday health issues.'),
      icon: <Heart className="w-12 h-12 text-hospital-accent" />
    },
    {
      id: 7,
      title: getTranslation('services.entSpecialist.title', 'ENT Specialist Appointments'),
      description: getTranslation('services.entSpecialist.description', 'Diagnosis and treatment of ear, nose, and throat problems.'),
      icon: <User className="w-12 h-12 text-orange-500" />
    },
    {
      id: 8,
      title: getTranslation('services.healthCheckups.title', 'Routine Health Checkups'),
      description: getTranslation('services.healthCheckups.description', 'Preventive checkups and health packages to keep you safe and healthy.'),
      icon: <CheckSquare className="w-12 h-12 text-teal-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('services.hero.title', 'Our Healthcare Services')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation('services.hero.subtitle', 'Caring for you and your family with expertise and compassion.')}
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-hospital-secondary inline-flex">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-hospital-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Our Services */}
        <section className="py-12 bg-hospital-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('services.whyChoose.title', 'Why Choose Our Services?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white inline-flex mb-4">
                  <Check className="h-8 w-8 text-hospital-accent" />
                </div>
                <h3 className="font-bold text-hospital-text">
                  {getTranslation('services.whyChoose.affordable', 'Affordable & Accessible')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white inline-flex mb-4">
                  <User className="h-8 w-8 text-hospital-accent" />
                </div>
                <h3 className="font-bold text-hospital-text">
                  {getTranslation('services.whyChoose.doctors', 'Trusted Doctors')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white inline-flex mb-4">
                  <Pill className="h-8 w-8 text-hospital-accent" />
                </div>
                <h3 className="font-bold text-hospital-text">
                  {getTranslation('services.whyChoose.delivery', 'Free Medicine Delivery')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white inline-flex mb-4">
                  <Calendar className="h-8 w-8 text-hospital-accent" />
                </div>
                <h3 className="font-bold text-hospital-text">
                  {getTranslation('services.whyChoose.booking', 'Convenient Appointment Booking')}
                </h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Book Appointment CTA */}
        <section className="py-12 bg-hospital-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {getTranslation('services.bookCTA.title', 'Need expert care? Book your appointment today!')}
            </h2>
            <a href="https://forms.gle/61B9jdr785XrSh2D7" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                {getTranslation('services.bookCTA.button', 'Book Now')}
              </Button>
            </a>
          </div>
        </section>
        
        {/* Quick FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('services.faq.title', 'Frequently Asked Questions')}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-hospital-primary font-medium">
                    {getTranslation('services.faq.q1', 'How do I book an appointment?')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {getTranslation('services.faq.a1', 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our helpline at 9534800801, or visiting our hospital in person.')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-hospital-primary font-medium">
                    {getTranslation('services.faq.q2', 'Is there a free consultation day?')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {getTranslation('services.faq.a2', 'Yes, we occasionally organize free health camps and consultation days. Please follow our updates section on the homepage for announcements about upcoming free consultation days.')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-hospital-primary font-medium">
                    {getTranslation('services.faq.q3', 'How can I order medicines?')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {getTranslation('services.faq.a3', 'You can order medicines by calling or WhatsApp messaging our pharmacy line at 9534800801. We offer free delivery within 3km of our location.')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-hospital-primary font-medium">
                    {getTranslation('services.faq.q4', 'Do you offer emergency services?')}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {getTranslation('services.faq.a4', 'Yes, our healthcare center is open 24/7 for emergency cases. For emergencies, please call us immediately at 9534800801.')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

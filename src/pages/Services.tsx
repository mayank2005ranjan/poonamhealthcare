
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, Pill, MedicalKit, Heart, Link } from 'lucide-react';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link as RouterLink } from 'react-router-dom';

const Services = () => {
  const { language, translations } = useLanguage();

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

  const healthcareServices = [
    {
      icon: <Stethoscope className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.bloodCollection.title', 'Blood Collection Facility'),
      description: getTranslation('servicesPage.bloodCollection.description', 'Hassle-free home blood sample collection for routine and special tests.')
    },
    {
      icon: <Pill className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.pharmacy.title', 'Pharmacy (Free Delivery)'),
      description: getTranslation('servicesPage.pharmacy.description', 'Order medicines from our in-house pharmacy with free delivery under 3 kms.')
    },
    {
      icon: <MedicalKit className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.eyeSpecialist.title', 'Eye Specialist Appointments'),
      description: getTranslation('servicesPage.eyeSpecialist.description', 'Comprehensive eye checkups, surgeries, and treatment from experienced specialists.')
    },
    {
      icon: <Heart className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.gynecologist.title', 'Gynecologist Consultations'),
      description: getTranslation('servicesPage.gynecologist.description', "Expert women's healthcare for all stages of life.")
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.diabetologist.title', 'Diabetologist Consultations'),
      description: getTranslation('servicesPage.diabetologist.description', 'Manage and control diabetes with personalized plans and guidance.')
    },
    {
      icon: <MedicalKit className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.generalPhysician.title', 'General Physician Visits'),
      description: getTranslation('servicesPage.generalPhysician.description', 'From fever to infections, trusted care for everyday health issues.')
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.entSpecialist.title', 'ENT Specialist Appointments'),
      description: getTranslation('servicesPage.entSpecialist.description', 'Diagnosis and treatment of ear, nose, and throat problems.')
    },
    {
      icon: <Heart className="h-12 w-12 text-hospital-primary" />,
      title: getTranslation('servicesPage.healthCheckups.title', 'Routine Health Checkups'),
      description: getTranslation('servicesPage.healthCheckups.description', 'Preventive checkups and health packages to keep you safe and healthy.')
    }
  ];

  const faqs = [
    {
      question: getTranslation('servicesPage.faq.q1', 'How do I book an appointment?'),
      answer: getTranslation('servicesPage.faq.a1', 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our helpline at 9534800801, or visiting our hospital in person.')
    },
    {
      question: getTranslation('servicesPage.faq.q2', 'Is there a free consultation day?'),
      answer: getTranslation('servicesPage.faq.a2', 'Yes, we occasionally organize free health camps and consultation days. Please follow our updates section on the homepage for announcements about upcoming free consultation days.')
    },
    {
      question: getTranslation('servicesPage.faq.q3', 'How can I order medicines?'),
      answer: getTranslation('servicesPage.faq.a3', 'You can order medicines by calling or WhatsApp messaging our pharmacy line at 9534800801. We offer free delivery within 3km of our location.')
    },
    {
      question: getTranslation('servicesPage.faq.q4', 'Do you offer emergency services?'),
      answer: getTranslation('servicesPage.faq.a4', 'Yes, our healthcare center is open 24/7 for emergency cases. For emergencies, please call us immediately at 9534800801.')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-hospital-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('servicesPage.hero.title', 'Our Healthcare Services')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {getTranslation('servicesPage.hero.subtitle', 'Caring for you and your family with expertise and compassion.')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthcareServices.map((service, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-hospital-primary text-center mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-12 text-center">
              {getTranslation('servicesPage.whyChoose.title', 'Why Choose Our Services?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-hospital-secondary/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Pill className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-semibold text-hospital-primary mb-2">
                  {getTranslation('servicesPage.whyChoose.affordable', 'Affordable & Accessible')}
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-hospital-secondary/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Stethoscope className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-semibold text-hospital-primary mb-2">
                  {getTranslation('servicesPage.whyChoose.doctors', 'Trusted Doctors')}
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-hospital-secondary/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <MedicalKit className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-semibold text-hospital-primary mb-2">
                  {getTranslation('servicesPage.whyChoose.delivery', 'Free Medicine Delivery')}
                </h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="bg-hospital-secondary/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-hospital-primary" />
                </div>
                <h3 className="text-xl font-semibold text-hospital-primary mb-2">
                  {getTranslation('servicesPage.whyChoose.booking', 'Convenient Appointment Booking')}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Book Appointment CTA */}
        <section className="py-16 bg-hospital-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              {getTranslation('servicesPage.bookCTA.title', 'Need expert care? Book your appointment today!')}
            </h2>
            
            <RouterLink to="/appointment">
              <Button size="lg" className="bg-white text-hospital-primary hover:bg-gray-100">
                {getTranslation('servicesPage.bookCTA.button', 'Book Now')}
              </Button>
            </RouterLink>
            
            {/* Appointment Process Steps */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">
                {getTranslation('servicesPage.appointmentProcess.title', 'Appointment Process')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {getTranslation('servicesPage.appointmentProcess.step1.title', '1. Scan & Pay')}
                  </h4>
                  <p className="text-gray-100">
                    {getTranslation('servicesPage.appointmentProcess.step1.description', 'Scan our UPI QR code and complete the consultation fee payment.')}
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {getTranslation('servicesPage.appointmentProcess.step2.title', '2. Save Payment Proof')}
                  </h4>
                  <p className="text-gray-100">
                    {getTranslation('servicesPage.appointmentProcess.step2.description', 'Take a screenshot of the successful payment.')}
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {getTranslation('servicesPage.appointmentProcess.step3.title', '3. Book Your Appointment')}
                  </h4>
                  <p className="text-gray-100">
                    {getTranslation('servicesPage.appointmentProcess.step3.description', 'Click the "Book Appointment" and fill out the form.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-12 text-center">
              {getTranslation('servicesPage.faq.title', 'Frequently Asked Questions')}
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-hospital-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;


import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Pill, Eye, UserRound, Calendar, Stethoscope, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const Services = () => {
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
        {/* Hero Banner */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
              {getTranslation('servicesPage.hero.title', 'Our Healthcare Services')}
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {getTranslation('servicesPage.hero.subtitle', 'Caring for you and your family with expertise and compassion.')}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blood Collection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-red-100 inline-block">
                  <Droplet className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.bloodCollection.title', 'Blood Collection Facility')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.bloodCollection.description', 'Hassle-free home blood sample collection for routine and special tests.')}
                </p>
              </div>
              
              {/* Pharmacy */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-green-100 inline-block">
                  <Pill className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.pharmacy.title', 'Pharmacy (Free Delivery)')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.pharmacy.description', 'Order medicines from our in-house pharmacy with free delivery under 3 kms.')}
                </p>
              </div>
              
              {/* Eye Specialist */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-blue-100 inline-block">
                  <Eye className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.eyeSpecialist.title', 'Eye Specialist Appointments')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.eyeSpecialist.description', 'Comprehensive eye checkups, surgeries, and treatment from experienced specialists.')}
                </p>
              </div>
              
              {/* Gynecologist */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-pink-100 inline-block">
                  <UserRound className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.gynecologist.title', 'Gynecologist Consultations')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.gynecologist.description', "Expert women's healthcare for all stages of life.")}
                </p>
              </div>
              
              {/* Diabetologist */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-purple-100 inline-block">
                  <Stethoscope className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.diabetologist.title', 'Diabetologist Consultations')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.diabetologist.description', 'Manage and control diabetes with personalized plans and guidance.')}
                </p>
              </div>
              
              {/* General Physician */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-teal-100 inline-block">
                  <UserRound className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.generalPhysician.title', 'General Physician Visits')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.generalPhysician.description', 'From fever to infections, trusted care for everyday health issues.')}
                </p>
              </div>
              
              {/* ENT Specialist */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-yellow-100 inline-block">
                  <Stethoscope className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.entSpecialist.title', 'ENT Specialist Appointments')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.entSpecialist.description', 'Diagnosis and treatment of ear, nose, and throat problems.')}
                </p>
              </div>
              
              {/* Health Checkups */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-3 rounded-full bg-indigo-100 inline-block">
                  <Shield className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {getTranslation('servicesPage.healthCheckups.title', 'Routine Health Checkups')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getTranslation('servicesPage.healthCheckups.description', 'Preventive checkups and health packages to keep you safe and healthy.')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-hospital-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-hospital-primary mb-10 text-center">
              {getTranslation('servicesPage.whyChoose.title', 'Why Choose Our Services?')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-white rounded-full mb-4">
                  <Check className="h-6 w-6 text-hospital-accent" />
                </div>
                <h3 className="font-semibold text-hospital-text mb-2">
                  {getTranslation('servicesPage.whyChoose.affordable', 'Affordable & Accessible')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-white rounded-full mb-4">
                  <Check className="h-6 w-6 text-hospital-accent" />
                </div>
                <h3 className="font-semibold text-hospital-text mb-2">
                  {getTranslation('servicesPage.whyChoose.doctors', 'Trusted Doctors')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-white rounded-full mb-4">
                  <Check className="h-6 w-6 text-hospital-accent" />
                </div>
                <h3 className="font-semibold text-hospital-text mb-2">
                  {getTranslation('servicesPage.whyChoose.delivery', 'Free Medicine Delivery')}
                </h3>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-white rounded-full mb-4">
                  <Check className="h-6 w-6 text-hospital-accent" />
                </div>
                <h3 className="font-semibold text-hospital-text mb-2">
                  {getTranslation('servicesPage.whyChoose.booking', 'Convenient Appointment Booking')}
                </h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Book Appointment CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-hospital-primary rounded-lg overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">
                    {getTranslation('servicesPage.bookCTA.title', 'Need expert care? Book your appointment today!')}
                  </h2>
                  <Link to="/appointment">
                    <Button size="lg" className="bg-white text-hospital-primary hover:bg-gray-100">
                      {getTranslation('servicesPage.bookCTA.button', 'Book Now')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="w-full md:w-1/3 bg-hospital-accent p-8 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>
            
            {/* Appointment Process */}
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-xl font-bold text-center text-hospital-primary mb-6">
                {getTranslation('servicesPage.appointmentProcess.title', 'Appointment Process')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4">1</div>
                    <h4 className="font-semibold text-hospital-primary mb-2">
                      {getTranslation('servicesPage.appointmentProcess.step1.title', 'Scan & Pay')}
                    </h4>
                    <p className="text-gray-600">
                      {getTranslation('servicesPage.appointmentProcess.step1.description', 'Scan our UPI QR code and complete the consultation fee payment.')}
                    </p>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4">2</div>
                    <h4 className="font-semibold text-hospital-primary mb-2">
                      {getTranslation('servicesPage.appointmentProcess.step2.title', 'Save Payment Proof')}
                    </h4>
                    <p className="text-gray-600">
                      {getTranslation('servicesPage.appointmentProcess.step2.description', 'Take a screenshot of the successful payment.')}
                    </p>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-hospital-secondary text-hospital-primary font-bold text-xl mb-4">3</div>
                    <h4 className="font-semibold text-hospital-primary mb-2">
                      {getTranslation('servicesPage.appointmentProcess.step3.title', 'Book Your Appointment')}
                    </h4>
                    <p className="text-gray-600">
                      {getTranslation('servicesPage.appointmentProcess.step3.description', 'Click the "Book Appointment" and fill out the form.')}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('servicesPage.faq.title', 'Frequently Asked Questions')}
            </h2>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-4">
                <h3 className="text-lg font-medium text-hospital-text mb-2">
                  {getTranslation('servicesPage.faq.q1', 'How do I book an appointment?')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('servicesPage.faq.a1', 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our helpline at 9534800801, or visiting our hospital in person.')}
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-lg font-medium text-hospital-text mb-2">
                  {getTranslation('servicesPage.faq.q2', 'Is there a free consultation day?')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('servicesPage.faq.a2', 'Yes, we occasionally organize free health camps and consultation days. Please follow our updates section on the homepage for announcements about upcoming free consultation days.')}
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-lg font-medium text-hospital-text mb-2">
                  {getTranslation('servicesPage.faq.q3', 'How can I order medicines?')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('servicesPage.faq.a3', 'You can order medicines by calling or WhatsApp messaging our pharmacy line at 9534800801. We offer free delivery within 3km of our location.')}
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-lg font-medium text-hospital-text mb-2">
                  {getTranslation('servicesPage.faq.q4', 'Do you offer emergency services?')}
                </h3>
                <p className="text-gray-600">
                  {getTranslation('servicesPage.faq.a4', 'Yes, our healthcare center is open 24/7 for emergency cases. For emergencies, please call us immediately at 9534800801.')}
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

export default Services;

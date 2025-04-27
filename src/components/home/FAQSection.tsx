
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      if (language in translation) {
        const value = translation[language];
        return typeof value === 'string' ? value : defaultValue;
      }
      return defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  const faqs = [
    {
      question: getTranslation('faq.appointment', 'How do I book an appointment?'),
      answer: getTranslation('faq.appointmentAnswer', 'You can book an appointment by clicking on the "Book Appointment" button, calling us at 9534800801, or visiting our clinic in person.')
    },
    {
      question: getTranslation('faq.homeDelivery', 'Is medicine home delivery available?'),
      answer: getTranslation('faq.homeDeliveryAnswer', 'Yes, we provide free medicine delivery within a 3km radius of our clinic. Just call or WhatsApp us your prescription.')
    },
    {
      question: getTranslation('faq.timing', 'What are your clinic timings?'),
      answer: getTranslation('faq.timingAnswer', 'Our clinic is open 24/7 for emergencies. Regular consultation hours are from 9:00 AM to 8:00 PM, Monday to Saturday.')
    },
    {
      question: getTranslation('faq.payment', 'What payment methods do you accept?'),
      answer: getTranslation('faq.paymentAnswer', 'We accept cash, credit/debit cards, and all UPI payment methods including PhonePe, Google Pay, and Paytm.')
    },
    {
      question: getTranslation('faq.specialists', 'What specialist doctors are available?'),
      answer: getTranslation('faq.specialistsAnswer', 'We have specialists in Eye Care, Gynecology, Diabetes Management, ENT, and General Medicine. Visit our About page to learn more about our doctors.')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {getTranslation('faq.title', 'Frequently Asked Questions')}
          </h2>
          <p className="text-gray-600">
            {getTranslation('faq.subtitle', 'Find quick answers to common questions about our services')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-hospital-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

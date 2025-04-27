
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-hospital-primary mb-6">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

          <div className="prose max-w-none">
            <p>
              The information provided on the Poonam Health Care website and through our services is intended for general informational purposes only.
            </p>
            <p>
              While we strive to ensure the accuracy and reliability of the information shared, Poonam Health Care makes no guarantees regarding the completeness, accuracy, or applicability of the content for your personal health conditions.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Important Points:</h2>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">Not a Substitute for Professional Medical Advice</h3>
            <p>
              All content, including text, graphics, images, and other material on our website, is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">Consult a Qualified Doctor</h3>
            <p>
              Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
              Never disregard or delay seeking professional medical advice because of something you have read on this website.
            </p>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">External Links</h3>
            <p>
              Our website may contain links to third-party websites for convenience.
              Poonam Health Care does not endorse, control, or take responsibility for the content or practices of any third-party sites.
            </p>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">Limitation of Liability</h3>
            <p>
              Poonam Health Care, its team, and affiliates will not be liable for any direct, indirect, consequential, or incidental damages resulting from the use or misuse of the information or services provided through the website.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Urgent Cases:</h2>
            <p className="font-bold text-red-600">
              For any medical emergency, do not rely on this website.
              Please contact emergency services or visit the nearest hospital immediately.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Contact Us:</h2>
            <p>If you have any questions about this disclaimer, you can reach us at:</p>
            <p className="mt-2">
              <strong>Poonam Health Care</strong><br />
              Ward Number 9, Jhanjharpur, Bihar, India - 847404<br />
              Phone: <a href="tel:9534800801" className="text-hospital-primary">9534800801</a><br />
              Email: <a href="mailto:support.phc@gmail.com" className="text-hospital-primary">support.phc@gmail.com</a><br />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;

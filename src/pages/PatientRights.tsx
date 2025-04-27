
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const PatientRights = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-hospital-primary mb-6">Patient Rights & Responsibilities</h1>
          <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

          <div className="prose max-w-none">
            <p>
              At Poonam Health Care, we respect the rights of our patients and believe in a collaborative approach to healthcare. Understanding your rights and responsibilities helps us provide you with the best possible care.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Your Rights as a Patient</h2>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">1. Right to Respectful Care</h3>
            <p>
              You have the right to receive considerate, respectful, and compassionate care regardless of your age, gender, religion, ethnicity, or any other personal characteristic.
            </p>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">2. Right to Information</h3>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Receive clear information about your diagnosis, treatment options, and prognosis in understandable terms</li>
              <li>Know the identity and professional status of individuals providing your care</li>
              <li>Be informed about the purpose of any proposed procedure or treatment</li>
              <li>Receive information about the outcomes of care, including unanticipated outcomes</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">3. Right to Make Decisions</h3>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Participate in decisions about your healthcare</li>
              <li>Accept or refuse treatment to the extent permitted by law</li>
              <li>Complete advance directives regarding your healthcare</li>
              <li>Include family members or representatives in your care decisions</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">4. Right to Privacy and Confidentiality</h3>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personal privacy during examinations and consultations</li>
              <li>Confidentiality of your medical records and communications</li>
              <li>Access your medical records as permitted by law</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">5. Right to Safe Environment</h3>
            <p>
              You have the right to receive care in a safe environment free from all forms of abuse, neglect, or harassment.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Your Responsibilities as a Patient</h2>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">1. Provide Information</h3>
            <p>
              You have the responsibility to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information about your health, medications, and medical history</li>
              <li>Report any changes in your condition promptly</li>
              <li>Inform healthcare providers if you do not understand your treatment plan</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">2. Follow Treatment Plan</h3>
            <p>
              You have the responsibility to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Follow the treatment plan recommended by your healthcare provider</li>
              <li>Take medications as prescribed</li>
              <li>Keep follow-up appointments and inform us when you cannot</li>
              <li>Accept the consequences of refusing treatment or not following instructions</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">3. Respect and Consideration</h3>
            <p>
              You have the responsibility to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Be respectful to healthcare staff, other patients, and visitors</li>
              <li>Respect the privacy of others</li>
              <li>Be considerate of noise levels and the number of visitors</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-hospital-primary mt-6 mb-2">4. Financial Obligations</h3>
            <p>
              You have the responsibility to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate insurance information</li>
              <li>Meet financial commitments related to your care</li>
              <li>Ask questions about charges and payment options</li>
            </ul>
            
            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about your rights and responsibilities or if you feel your rights have not been respected, please contact:
            </p>
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

export default PatientRights;

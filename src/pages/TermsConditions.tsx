
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-hospital-primary mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

          <div className="prose max-w-none">
            <p>
              Welcome to Poonam Health Care. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions.
            </p>
            <p>
              Please read them carefully.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">1. Services Offered</h2>
            <p>Poonam Health Care provides:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Doctor consultations (appointment-based and walk-in)</li>
              <li>Pharmacy services (with free delivery under 3 km)</li>
              <li>Blood collection for diagnostic tests</li>
              <li>Health information for patient education</li>
            </ul>
            <p>All services are provided subject to availability and medical evaluation.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">2. Booking and Payments</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Appointments:</strong><br />
                You can book an appointment through our website link, WhatsApp, or by calling us.
              </li>
              <li>
                <strong>Payments:</strong><br />
                Appointment consultation fees must be paid before or at the time of consultation.<br />
                Payments made via UPI or bank transfer must be verified by our team.
              </li>
              <li>
                <strong>Refunds:</strong><br />
                Once an appointment is confirmed, fees are non-refundable, except if the appointment is cancelled by Poonam Health Care.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">3. Pharmacy Orders</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We provide medicine delivery within a 3 km radius from our hospital location.</li>
              <li>Medicines will only be dispatched against valid prescriptions (as per medical regulations).</li>
              <li>Free delivery timelines are subject to stock availability and order confirmation.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">4. Patient Responsibility</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Always provide accurate personal and health-related information.</li>
              <li>Follow the doctor's advice and prescriptions strictly.</li>
              <li>Consult a medical professional for serious conditions — information on our website is not a substitute for personal medical care.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">5. Use of Website</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The content on our website (text, images, logos) is protected and owned by Poonam Health Care.</li>
              <li>You agree not to copy, distribute, or misuse any material without permission.</li>
              <li>You must not use the website for any illegal or unauthorized purpose.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">6. Limitations of Liability</h2>
            <p>While we strive to provide the best care and information, Poonam Health Care is not responsible for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any technical error, delay, or downtime of the website.</li>
              <li>Any loss arising from reliance on information provided without professional consultation.</li>
              <li>Any third-party links or services mentioned on the website.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">7. Privacy</h2>
            <p>We respect your privacy.</p>
            <p>Our Privacy Policy explains how we collect and use your information.</p>
            <p>(Refer to our <a href="/privacy-policy" className="text-hospital-primary">Privacy Policy page</a>.)</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">8. Changes to Terms</h2>
            <p>Poonam Health Care reserves the right to update or modify these Terms & Conditions at any time without prior notice.</p>
            <p>Changes will be effective once posted on this page.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of India, and any disputes will be handled under the jurisdiction of courts in Jhanjharpur, Bihar.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms & Conditions, please contact:</p>
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

export default TermsConditions;

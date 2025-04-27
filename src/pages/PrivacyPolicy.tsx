
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-hospital-primary mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

          <div className="prose max-w-none">
            <p>
              Welcome to Poonam Health Care. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and disclose your information when you use our website and services.
            </p>
            <p>
              By using our services, you agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Personal Information:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Name, mobile number, email address, residential address, and health-related information when you book appointments, place medicine orders, or contact us.</li>
                </ul>
              </li>
              <li>
                <strong>Payment Information:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Payment confirmation details for appointment bookings (we do not store your card or UPI details).</li>
                </ul>
              </li>
              <li>
                <strong>Communication Data:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Any messages, inquiries, or feedback shared through WhatsApp, email, or call.</li>
                </ul>
              </li>
              <li>
                <strong>Technical Information:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Device type, browser information, and IP address to improve your website experience.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Confirm appointments and provide medical consultations.</li>
              <li>Process pharmacy orders and deliver medicines.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Send important notifications (appointment confirmations, service updates).</li>
              <li>Improve our services and website usability.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Internal Staff and Doctors for healthcare service coordination.</li>
              <li>Authorized Service Providers (e.g., delivery personnel) only when needed to fulfill your request.</li>
            </ul>
            <p>All information shared internally is handled with strict confidentiality.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            <p>However, no internet transmission is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and review your personal information.</li>
              <li>Request corrections or updates to your information.</li>
              <li>Withdraw consent for data use (which may limit some services).</li>
            </ul>
            <p>To exercise these rights, please contact us at support.phc@gmail.com.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">6. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations.</p>
            <p>We encourage you to review this page occasionally for the latest updates.</p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our practices, please contact:</p>
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

export default PrivacyPolicy;

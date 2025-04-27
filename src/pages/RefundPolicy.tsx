
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-hospital-primary mb-6">Refund & Cancellation Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: April 26, 2025</p>

          <div className="prose max-w-none">
            <p>
              At Poonam Health Care, we aim to provide a smooth and patient-friendly experience.
              Below are the guidelines regarding refunds and cancellations for appointments and pharmacy orders:
            </p>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">1. Appointment Cancellation & Refund</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cancellation by Patient:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>If you cancel your appointment at least 2 hours before the scheduled time, you are eligible for a full refund of the consultation fee (after deduction of minimal transaction charges, if applicable).</li>
                  <li>If cancellation is made less than 2 hours before the appointment, no refund will be provided.</li>
                </ul>
              </li>
              <li>
                <strong>Rescheduling:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>You can reschedule your appointment once without any extra charge by informing us at least 2 hours prior to the original appointment time.</li>
                  <li>Rescheduling requests made less than 2 hours before the appointment may be treated as a new booking.</li>
                </ul>
              </li>
              <li>
                <strong>Cancellation by Poonam Health Care:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>In the rare case that we cancel an appointment due to unforeseen circumstances (e.g., doctor unavailability), patients will have the option to either:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Reschedule at no extra cost, or</li>
                      <li>Receive a full refund.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">2. Pharmacy Orders Cancellation & Refund</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cancellation Before Dispatch:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Orders can be cancelled before they are dispatched without any cancellation fee.</li>
                  <li>To cancel, contact us immediately through phone or WhatsApp.</li>
                </ul>
              </li>
              <li>
                <strong>After Dispatch:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Once medicines are dispatched, cancellation is not possible.</li>
                  <li>Medicines once delivered cannot be returned or refunded unless:
                    <ul className="list-disc pl-6 mt-2">
                      <li>The wrong medicine was delivered.</li>
                      <li>The medicine package was damaged on arrival.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Refund for Incorrect or Damaged Deliveries:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>If you receive wrong or damaged medicines, you must inform us within 24 hours of delivery with photographic proof.</li>
                  <li>Upon verification, either a replacement will be provided or a full refund will be initiated.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">3. Refund Processing Time</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Refunds, once approved, will be processed within 7–10 working days.</li>
              <li>Refunds will be made to the original payment method (UPI, bank account, etc.).</li>
              <li>Transaction or gateway fees, if any, are non-refundable.</li>
            </ul>

            <h2 className="text-xl font-bold text-hospital-primary mt-8 mb-4">4. How to Request a Cancellation or Refund</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Phone: <a href="tel:9534800801" className="text-hospital-primary">9534800801</a></li>
              <li>WhatsApp: <a href="https://wa.me/919534800801" className="text-hospital-primary">9534800801</a></li>
              <li>Email: <a href="mailto:support.phc@gmail.com" className="text-hospital-primary">support.phc@gmail.com</a></li>
            </ul>
            <p>When contacting us, please share:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your appointment/order details</li>
              <li>Payment reference number (if applicable)</li>
              <li>Reason for cancellation or refund request</li>
            </ul>

            <p className="mt-4 text-sm">
              <strong>Note:</strong> Poonam Health Care reserves the right to modify the Refund & Cancellation Policy without prior notice.
              We recommend reviewing this policy periodically for any updates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;

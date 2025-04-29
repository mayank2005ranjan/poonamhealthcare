
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ScanLine, FileCheck, FormInput } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src="/qr-code.jpg" 
              alt="Payment QR Code" 
              className="rounded-lg shadow-md w-full max-w-md mx-auto"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/400x400?text=UPI+QR+Code';
              }}
            />
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Schedule your appointment with our specialists today. Quick and easy booking process 
              to save your valuable time.
            </p>
            
            <Link to="/appointment">
              <Button size="lg" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">
              Quick and Easy Booking! Scan the QR code for payment after confirmation.
            </p>
            
            {/* Appointment Process Steps */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">How to Book Your Appointment:</h3>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-hospital-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-medium">Scan & Pay</p>
                  <p className="text-sm text-gray-600">Scan our UPI QR code and complete the consultation fee payment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-hospital-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-medium">Save Payment Proof</p>
                  <p className="text-sm text-gray-600">Take a screenshot of the successful payment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-hospital-primary rounded-full text-white w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-medium">Book Your Appointment</p>
                  <p className="text-sm text-gray-600">Click the "Book Appointment" and fill out the form.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

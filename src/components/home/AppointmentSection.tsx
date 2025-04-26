
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

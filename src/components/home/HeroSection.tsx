
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-hospital-primary/90 to-hospital-primary">
      <div className="absolute inset-0 bg-[url('/hospital-hero.jpg')] bg-cover bg-center mix-blend-overlay" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your Trusted Partner in Health and Wellness
          </h1>
          <p className="text-xl mb-8">
            Expert Care | Trusted Doctors | Compassionate Service
          </p>
          <div className="flex gap-4">
            <Link to="/appointment">
              <Button size="lg" variant="default" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

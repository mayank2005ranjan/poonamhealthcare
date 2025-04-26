
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/5">
            <img 
              src="/hospital-reception.jpg" 
              alt="Poonam Health Care Reception" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x400?text=Poonam+Health+Care';
              }}
            />
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Poonam Health Care</h2>
            <p className="text-gray-600 mb-6">
              At Poonam Health Care, we are committed to delivering quality healthcare services 
              with compassion and expertise. With state-of-the-art facilities and experienced 
              medical professionals, we strive to provide the best healthcare experience for 
              our patients in Jhanjharpur and surrounding areas.
            </p>
            
            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

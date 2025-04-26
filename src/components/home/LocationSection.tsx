
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3040340724554!2d86.27347607640595!3d26.439177977425577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee616d8700000f%3A0xd3dcf091a007b9e8!2sJhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1682505701424!5m2!1sen!2sin";

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//Jhanjharpur+Bihar+847404/@26.4391734,86.2734761,17z/", "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Us</h2>
          <p className="text-gray-600">Visit our location in Jhanjharpur</p>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden shadow-md mb-6" style={{ height: '400px' }}>
          <iframe 
            src={googleMapsUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Poonam Health Care Location"
          ></iframe>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-hospital-primary" />
            123 Health Street, Jhanjharpur, Bihar, 847404
          </p>
          
          <Button onClick={handleGetDirections} className="gap-2">
            <MapPin className="h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Pill, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Blood Collection Facility",
    description: "On-site blood sampling with quick and accurate results.",
    icon: <Droplet className="w-8 h-8 text-red-500" />
  },
  {
    id: 2,
    title: "Pharmacy (Free Delivery)",
    description: "Full-service pharmacy with free home delivery option.",
    icon: <Pill className="w-8 h-8 text-green-500" />
  },
  {
    id: 3,
    title: "Doctor Appointments",
    description: "Eye, Gynecology, Diabetes, General, ENT, Health Checkup.",
    icon: <Calendar className="w-8 h-8 text-blue-500" />
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
          <p className="text-gray-600">Comprehensive healthcare services for you and your family</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

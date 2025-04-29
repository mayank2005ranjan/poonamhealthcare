
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
  degree: string;
  department: string;
  experience: string;
  bio: string;
  imageSrc: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rakesh Roshan Chaudhary",
    degree: "MBBS (DMCH), D.T.M & H (Medicine) MD (General Physician)",
    department: "General Physician",
    experience: "Heart, lung, stomach and diabetes specialist",
    bio: "Specialist in heart, lung, stomach and diabetes cases.",
    imageSrc: "/doctor1.jpg"
  },
  {
    id: 2,
    name: "Dr. Kumari Rashmi Chaudhary",
    degree: "ΜΒΒS (ΑΝΜMC), MD (DMCH)",
    department: "Gynaecologist & Anaesthesiologist",
    experience: "Women's health specialist",
    bio: "Expert in women's healthcare and maternal wellness.",
    imageSrc: "/doctor2.jpg"
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Doctors</h2>
          <p className="text-gray-600">Experienced specialists dedicated to your health and care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={doctor.imageSrc} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x300?text=${encodeURIComponent(doctor.name)}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-hospital-primary mb-1">{doctor.name}</h3>
                <p className="text-gray-600 mb-1">{doctor.degree}</p>
                <p className="text-gray-600 font-semibold mb-2">{doctor.department}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-hospital-secondary/20 text-hospital-secondary text-sm px-3 py-1 rounded-full">
                    {doctor.experience}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/about#doctors">
            <Button variant="outline" className="group">
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

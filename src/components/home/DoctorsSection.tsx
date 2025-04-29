
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface Doctor {
  id: number;
  name: string;
  degree: string;
  department: string;
  experience: string;
  bio: string;
  imageSrc: string;
}

const DoctorsSection = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      if (language in translation) {
        return String(translation[language]) || defaultValue;
      }
      return defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };
  
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Rakesh Roshan Chaudhary",
      degree: "MBBS (DMCH), D.T.M & H (Medicine) MD (General Physician)",
      department: getTranslation('doctors.generalPhysician', "General Physician"),
      experience: "10+ years",
      bio: getTranslation('doctors.rrcBio', "Heart, lung, stomach and diabetes specialist"),
      imageSrc: "/doctor1.jpg"
    },
    {
      id: 2,
      name: "Dr. Kumari Rashmi Chaudhary",
      degree: "ΜΒΒS (ΑΝΜMC), MD (DMCH)",
      department: getTranslation('doctors.gynaecologist', "Gynaecologist & Anaesthesiologist"),
      experience: "10+ years",
      bio: getTranslation('doctors.krcBio', "Expert in women's healthcare and maternal wellness"),
      imageSrc: "/doctor2.jpg"
    },
    {
      id: 3,
      name: "Dr. Md. Masihuzzaman",
      degree: "PhD, M.Ophtal, B.Ophthal. FOVT (USA)",
      department: getTranslation('doctors.eyeSpecialist', "Eye Specialist"),
      experience: "10+ years",
      bio: getTranslation('doctors.mmBio', "Specialist in comprehensive eye care and treatments"),
      imageSrc: "/doctor3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{getTranslation('meetOurDoctors', 'Meet Our Doctors')}</h2>
          <p className="text-gray-600">{getTranslation('doctorsTagline', 'Experienced specialists dedicated to your health and care.')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <span className="bg-hospital-accent text-white text-sm px-3 py-1 rounded-full font-semibold">
                    {doctor.experience}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/team">
            <Button variant="outline" className="group">
              {getTranslation('viewAllDoctors', 'View All Doctors')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

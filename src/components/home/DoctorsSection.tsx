
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
      name: getTranslation('doctors.rakesh.name', "Dr. Rakesh Roshan Chaudhary"),
      degree: getTranslation('doctors.rakesh.degree', "MBBS (DMCH), D.T.M & H (Medicine) MD (General Physician)"),
      department: getTranslation('doctors.rakesh.department', "General Physician"),
      experience: getTranslation('doctors.rakesh.experience', "10+ years experience"),
      bio: getTranslation('doctors.rakesh.bio', "Specialist in heart, lung, stomach and diabetes cases."),
      imageSrc: "/doctor1.jpg"
    },
    {
      id: 2,
      name: getTranslation('doctors.rashmi.name', "Dr. Kumari Rashmi Chaudhary"),
      degree: getTranslation('doctors.rashmi.degree', "ΜΒΒS (ΑΝΜMC), MD (DMCH)"),
      department: getTranslation('doctors.rashmi.department', "Gynaecologist & Anaesthesiologist"),
      experience: getTranslation('doctors.rashmi.experience', "10+ years experience"),
      bio: getTranslation('doctors.rashmi.bio', "Expert in women's healthcare and maternal wellness."),
      imageSrc: "/doctor2.jpg"
    },
    {
      id: 3,
      name: getTranslation('doctors.masihuzzaman.name', "Dr. Md. Masihuzzaman"),
      degree: getTranslation('doctors.masihuzzaman.degree', "PhD, M.Ophtal, B.Ophthal. FOVT (USA)"),
      department: getTranslation('doctors.masihuzzaman.department', "Eye Specialist"),
      experience: getTranslation('doctors.masihuzzaman.experience', "10+ years experience"),
      bio: getTranslation('doctors.masihuzzaman.bio', "Specialized in advanced eye care and treatments."),
      imageSrc: "/doctor3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{getTranslation('meetOurDoctors', 'Meet Our Doctors')}</h2>
          <p className="text-gray-600">{getTranslation('doctorsSubtitle', 'Experienced specialists dedicated to your health and care.')}</p>
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
                  <span className="bg-hospital-primary text-white text-sm px-3 py-1 rounded-full font-medium">
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

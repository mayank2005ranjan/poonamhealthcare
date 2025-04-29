
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

interface Doctor {
  id: number;
  name: string;
  degree: string;
  department: string;
  experience: string;
  bio: string;
  imageSrc: string;
}

interface Staff {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

const TeamPage = () => {
  const { language, translations } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const parts = key.split('.');
    let current: any = translations;
    
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return defaultValue;
      }
    }
    
    if (typeof current === 'object' && language in current) {
      return String(current[language] || defaultValue);
    }
    
    return typeof current === 'string' ? current : defaultValue;
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
  
  const nursingStaff: Staff[] = [
    {
      id: 1,
      name: "Sunita Kumari",
      role: getTranslation('staff.headNurse', "Head Nurse"),
      quote: getTranslation('staff.sunitaQuote', "Compassionate care, every patient, every time"),
      imageSrc: "/nurse1.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: getTranslation('staff.pharmacist', "Pharmacist"),
      quote: getTranslation('staff.rajeshQuote', "Right medicine, right time, right care"),
      imageSrc: "/pharmacist.jpg"
    },
    {
      id: 3,
      name: "Renu Devi",
      role: getTranslation('staff.labTechnician', "Lab Technician"),
      quote: getTranslation('staff.renuQuote', "Accurate tests for accurate diagnosis"),
      imageSrc: "/lab-tech.jpg"
    },
    {
      id: 4,
      name: "Mohan Singh",
      role: getTranslation('staff.receptionist', "Receptionist"),
      quote: getTranslation('staff.mohanQuote', "Your first smile when you walk in"),
      imageSrc: "/receptionist.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hospital-primary mb-4">
              {getTranslation('teamPage.hero.title', 'Meet Our Team')}
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              {getTranslation('teamPage.hero.subtitle', 'The strength of our care lies in the hands of our dedicated experts')}
            </p>
          </div>
        </section>
        
        {/* Doctors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('teamPage.doctors.title', 'Doctors & Specialists')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
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
                    <Link to="/appointment">
                      <Button variant="default" className="w-full bg-hospital-primary hover:bg-hospital-primary/90 flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {getTranslation('teamPage.bookAppointment', 'Book Appointment')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Nursing Staff Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('teamPage.nursingStaff.title', 'Nursing & Support Staff')}
            </h2>
            
            <div className="flex flex-nowrap overflow-x-auto pb-6 gap-6 max-w-6xl mx-auto scrollbar-hide">
              {nursingStaff.map((staff) => (
                <div key={staff.id} className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={staff.imageSrc} 
                      alt={staff.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/300x200?text=${encodeURIComponent(staff.name)}`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-hospital-primary mb-1">{staff.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{staff.role}</p>
                    <p className="text-gray-500 text-sm italic">{staff.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Group Banner */}
        <section className="py-16 bg-hospital-primary relative">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                {getTranslation('teamPage.groupBanner.title', 'Together, We Care')}
              </h2>
              <p className="mb-6">
                {getTranslation('teamPage.groupBanner.description', 'Our team of professionals work together to provide the best care for you and your family.')}
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto bg-hospital-secondary rounded-lg p-10 shadow-md">
              <Heart className="h-12 w-12 text-hospital-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-hospital-primary mb-4">
                {getTranslation('teamPage.cta.title', 'Need Expert Care?')}
              </h2>
              <p className="text-gray-600 mb-8">
                {getTranslation('teamPage.cta.subtitle', 'Meet our trusted doctors and book your consultation today!')}
              </p>
              <Link to="/appointment">
                <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90">
                  {getTranslation('teamPage.cta.button', 'Book Appointment')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;

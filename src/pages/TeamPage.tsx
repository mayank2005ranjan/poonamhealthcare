
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const TeamPage = () => {
  const { language, translations } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      return language in translation ? String(translation[language] || defaultValue) : defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };

  const doctors = [
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

  const staff = [
    {
      id: 1,
      name: getTranslation('staff.nurse1.name', "Anjali Kumari"),
      role: getTranslation('staff.nurse1.role', "Senior Nurse"),
      quote: getTranslation('staff.nurse1.quote', "Always here to care for you"),
      imageSrc: "/nurse1.jpg"
    },
    {
      id: 2,
      name: getTranslation('staff.nurse2.name', "Ravi Kumar"),
      role: getTranslation('staff.nurse2.role', "Pharmacy Assistant"),
      quote: getTranslation('staff.nurse2.quote', "Your health is our priority"),
      imageSrc: "/nurse2.jpg"
    },
    {
      id: 3,
      name: getTranslation('staff.nurse3.name', "Sunita Devi"),
      role: getTranslation('staff.nurse3.role', "Lab Technician"),
      quote: getTranslation('staff.nurse3.quote', "Accurate diagnostics for better treatment"),
      imageSrc: "/nurse3.jpg"
    },
    {
      id: 4,
      name: getTranslation('staff.nurse4.name', "Mukesh Singh"),
      role: getTranslation('staff.nurse4.role', "Patient Coordinator"),
      quote: getTranslation('staff.nurse4.quote', "Making your hospital visit seamless"),
      imageSrc: "/staff1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-hospital-secondary/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hospital-primary mb-4">
              {getTranslation('teamPage.title', 'Meet Our Team')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getTranslation('teamPage.subtitle', 'The strength of our care lies in the hands of our dedicated experts.')}
            </p>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('teamPage.doctorsTitle', 'Doctors & Specialists')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    
                    <Link to="/appointment">
                      <Button variant="outline" className="w-full">
                        {getTranslation('teamPage.bookAppointment', 'Book Appointment')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nursing & Support Staff */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-hospital-primary mb-8 text-center">
              {getTranslation('teamPage.staffTitle', 'Nursing & Support Staff')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {staff.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.imageSrc}
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/200x200?text=${encodeURIComponent(member.name.charAt(0))}`;
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-hospital-primary">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm italic">{member.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Photo Banner */}
        <section className="py-16 relative bg-hospital-primary">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {getTranslation('teamPage.togetherTitle', 'Together, We Care')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              {getTranslation('teamPage.togetherDesc', 'Our team is committed to providing you with the best healthcare experience.')}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-hospital-primary mb-4">
              {getTranslation('teamPage.needCare', 'Need Expert Care?')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation('teamPage.meetDoctors', 'Meet our trusted doctors and book your consultation today!')}
            </p>
            
            <Link to="/appointment">
              <Button size="lg" className="bg-hospital-primary hover:bg-hospital-primary/90">
                {getTranslation('bookAppointment', 'Book Appointment')}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;


import React from 'react';
import { Bell, Pill, Ambulance } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Update {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
}

const UpdatesSection = () => {
  const { language, translations } = useLanguage();
  
  // Helper function to safely extract string values from translations
  const getTranslation = (key: string, defaultValue: string): string => {
    const translation = translations[key];
    if (typeof translation === 'object' && translation !== null) {
      return language in translation ? String(translation[language] || defaultValue) : defaultValue;
    }
    return typeof translation === 'string' ? translation : defaultValue;
  };
  
  const updates: Update[] = [
    {
      id: 1,
      title: getTranslation('updates.nowOnline', "Now Online!"),
      date: getTranslation('updates.nowOnlineDate', "April 29, 2025"),
      icon: <Bell className="h-5 w-5 text-hospital-primary" />
    },
    {
      id: 2,
      title: getTranslation('updates.eyeCare', "World-Class Eye Care Now Available"),
      date: getTranslation('updates.eyeCareDate', "April 29, 2025"),
      icon: <Pill className="h-5 w-5 text-hospital-accent" />
    },
    {
      id: 3,
      title: getTranslation('updates.bloodTest', "Blood Test Facility Launched"),
      date: getTranslation('updates.bloodTestDate', "April 29, 2025"),
      icon: <Ambulance className="h-5 w-5 text-red-500" />
    }
  ];

  return (
    <section className="py-16 bg-hospital-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-primary mb-2">{getTranslation('latestUpdates', 'Latest Updates')}</h2>
          <p className="text-hospital-text">{getTranslation('stayInformed', 'Stay informed about our services and events')}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div 
            key={updates[0].id} 
            className="bg-white p-5 rounded-lg shadow-md mb-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-hospital-secondary flex-shrink-0">
              {updates[0].icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-hospital-text">{updates[0].title}</h3>
              <p className="text-sm text-gray-600 mb-1">{updates[0].date}</p>
              <p className="text-gray-500">{getTranslation('updates.nowOnlineDesc', "Poonam Health Care is now live online — explore our services, book appointments, and order medicines at: poonamhealthcare.vercel.app")}</p>
            </div>
          </div>
          
          <div 
            key={updates[1].id} 
            className="bg-white p-5 rounded-lg shadow-md mb-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-hospital-secondary flex-shrink-0">
              {updates[1].icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-hospital-text">{updates[1].title}</h3>
              <p className="text-sm text-gray-600 mb-1">{updates[1].date}</p>
              <p className="text-gray-500">{getTranslation('updates.eyeCareDesc', "We now offer expert eye consultations and advanced treatments from experienced specialists. Your vision is in safe hands!")}</p>
            </div>
          </div>
          
          <div 
            key={updates[2].id} 
            className="bg-white p-5 rounded-lg shadow-md mb-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-hospital-secondary flex-shrink-0">
              {updates[2].icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-hospital-text">{updates[2].title}</h3>
              <p className="text-sm text-gray-600 mb-1">{updates[2].date}</p>
              <p className="text-gray-500">{getTranslation('updates.bloodTestDesc', "Get hassle-free blood collection at your home for routine and special tests. Book now and stay ahead of your health.")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;

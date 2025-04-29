
import React from 'react';
import { Bell, Pill, Droplet, Globe } from 'lucide-react';
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
      title: getTranslation('updates.website', "Now Online! Poonam Health Care is now live online — explore our services, book appointments, and order medicines at: poonamhealthcare.vercel.app"),
      date: getTranslation('updates.websiteDate', "April 29, 2025"),
      icon: <Globe className="h-5 w-5 text-blue-500" />
    },
    {
      id: 2,
      title: getTranslation('updates.eyeCare', "World-Class Eye Care Now Available - We now offer expert eye consultations and advanced treatments from experienced specialists. Your vision is in safe hands!"),
      date: getTranslation('updates.eyeCareDate', "April 29, 2025"),
      icon: <Bell className="h-5 w-5 text-hospital-primary" />
    },
    {
      id: 3,
      title: getTranslation('updates.bloodTest', "Blood Test Facility Launched - Get hassle-free blood collection at your home for routine and special tests. Book now and stay ahead of your health."),
      date: getTranslation('updates.bloodTestDate', "April 29, 2025"),
      icon: <Droplet className="h-5 w-5 text-red-500" />
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
          {updates.map((update) => (
            <div 
              key={update.id} 
              className="bg-white p-5 rounded-lg shadow-md mb-4 flex items-center gap-4"
            >
              <div className="p-3 rounded-full bg-hospital-secondary flex-shrink-0">
                {update.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-hospital-text">{update.title}</h3>
                <p className="text-gray-500 text-sm">{update.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;

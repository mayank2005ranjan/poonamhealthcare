
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
      title: getTranslation('updates.eyeCamp', "Free Eye Camp on 5th May!"),
      date: getTranslation('updates.eyeCampDate', "April 20, 2025"),
      icon: <Bell className="h-5 w-5 text-hospital-primary" />
    },
    {
      id: 2,
      title: getTranslation('updates.diabetes', "New Diabetes Specialist Available"),
      date: getTranslation('updates.diabetesDate', "April 15, 2025"),
      icon: <Pill className="h-5 w-5 text-hospital-accent" />
    },
    {
      id: 3,
      title: getTranslation('updates.blood', "Emergency Blood Collection Service started"),
      date: getTranslation('updates.bloodDate', "April 10, 2025"),
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
        
        {/* View All Updates button removed as requested */}
      </div>
    </section>
  );
};

export default UpdatesSection;

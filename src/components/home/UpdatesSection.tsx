
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bell, Pill, Ambulance } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Update {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
}

const updates: Update[] = [
  {
    id: 1,
    title: "Free Eye Camp on 5th May!",
    date: "April 20, 2025",
    icon: <Bell className="h-5 w-5 text-blue-500" />
  },
  {
    id: 2,
    title: "New Diabetes Specialist Available",
    date: "April 15, 2025",
    icon: <Pill className="h-5 w-5 text-green-500" />
  },
  {
    id: 3,
    title: "Emergency Blood Collection Service started",
    date: "April 10, 2025",
    icon: <Ambulance className="h-5 w-5 text-red-500" />
  }
];

const UpdatesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Updates</h2>
          <p className="text-gray-600">Stay informed about our services and events</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {updates.map((update) => (
            <div 
              key={update.id} 
              className="bg-white p-5 rounded-lg shadow-md mb-4 flex items-center gap-4"
            >
              <div className="p-3 rounded-full bg-gray-100 flex-shrink-0">
                {update.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{update.title}</h3>
                <p className="text-gray-500 text-sm">{update.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/updates">
            <Button variant="outline" className="group">
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;

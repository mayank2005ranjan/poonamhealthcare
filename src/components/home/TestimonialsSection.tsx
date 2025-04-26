
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rakesh Kumar",
    text: "Best service in Jhanjharpur! The doctors are very knowledgeable and the staff is friendly.",
    rating: 5,
    location: "Jhanjharpur"
  },
  {
    id: 2,
    name: "Priya Singh",
    text: "Very kind and experienced doctors! I've been coming here for years and always receive excellent care.",
    rating: 5,
    location: "Saharsa"
  },
  {
    id: 3,
    name: "Mohan Sharma",
    text: "The pharmacy service is excellent. They deliver medicines right to my doorstep which is very convenient.",
    rating: 4,
    location: "Madhubani"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Patient Testimonials</h2>
          <p className="text-gray-600">What our patients say about us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

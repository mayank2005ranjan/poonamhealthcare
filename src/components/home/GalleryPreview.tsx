
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/hospital-front.jpg",
    alt: "Hospital Front"
  },
  {
    id: 2,
    src: "/reception.jpg",
    alt: "Inside Reception"
  },
  {
    id: 3,
    src: "/pharmacy.jpg",
    alt: "Pharmacy Counter"
  },
  {
    id: 4,
    src: "/consultation.jpg",
    alt: "Doctor Consultation Room"
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Gallery</h2>
          <p className="text-gray-600">Take a look inside our facilities</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/300x300?text=${encodeURIComponent(image.alt)}`;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" className="group">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Données de test pour les freelances
const freelancers = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Développeuse Frontend",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Designer UX/UI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Julie Leroy",
    role: "Développeuse Fullstack",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lucas Moreau",
    role: "Développeur Backend",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=400&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Emma Petit",
    role: "Designer Graphique",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Nicolas Bernard",
    role: "Développeur Mobile",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=400&auto=format&fit=crop",
  },
];

export default function FreelancersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.ceil(freelancers.length / 3) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-[#f8f4eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#454699]">
          Nos Freelances
        </h2>
        
        <div className="relative">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#454699] p-2 rounded-full shadow-md transition-all duration-300"
            aria-label="Précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#454699] p-2 rounded-full shadow-md transition-all duration-300"
            aria-label="Suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          {/* Carrousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {Array.from({ length: Math.ceil(freelancers.length / 3) }).map((_, groupIndex) => (
                <div key={groupIndex} className="flex-shrink-0 w-full flex justify-center gap-6">
                  {freelancers.slice(groupIndex * 3, (groupIndex + 1) * 3).map((freelancer) => (
                    <div
                      key={freelancer.id}
                      className="flex flex-col items-center w-64"
                    >
                      <div className="relative w-48 h-64 mb-4 overflow-hidden rounded-xl shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        <motion.div
                          className="relative w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={freelancer.image}
                            alt={freelancer.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#454699]">{freelancer.name}</h3>
                      <p className="text-[#454699]/80">{freelancer.role}</p>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Indicateurs de pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#454699] w-6" : "bg-[#454699]/30"
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
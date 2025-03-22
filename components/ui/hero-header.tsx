"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroHeader = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80, // -80 pour compenser la navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#f8f4eb] min-h-[90vh] md:min-h-[80vh] flex items-center py-12 md:py-0">
      {/* Cercles décoratifs animés - ajustés pour mobile */}
      <motion.div
        className="absolute right-[-100px] md:right-[-150px] top-[-100px] md:top-[-150px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[#f4bff5]/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute left-[-50px] md:left-[-100px] bottom-[-50px] md:bottom-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[#454699]/10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image pour mobile - au-dessus du texte */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[200px] lg:h-[400px] block lg:hidden mb-6"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative h-full"
            >
              <Image
                src="/images/logo.png"
                alt="Freewin Illustration"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#454699]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bienvenue sur <span className="text-[#454699]">Freewin</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl mb-6 md:mb-8 text-[#454699]/80 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Votre partenaire de confiance pour la gestion administrative et la prospection clients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/#services" onClick={scrollToServices} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#454699] text-white px-8 py-3 rounded-full font-medium hover:bg-[#454699]/90 transition-colors"
                >
                  Nos services
                </motion.button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#f4bff5] text-[#454699] px-8 py-3 rounded-full font-medium hover:bg-[#f4bff5]/80 transition-colors"
                >
                  En savoir plus
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image pour desktop - à droite du texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[400px] hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative h-full"
            >
              <Image
                src="/images/logo.png"
                alt="Freewin Illustration"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader; 
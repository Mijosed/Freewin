'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#f8f4eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-[#454699]  mb-6"
          >
            Un accompagnement main dans la main pour votre réussite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-[#454699] mb-8"
          >
           Lead sourcing, prospection, administratif.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/services"
              className="bg-[#454699] text-[#f8f4eb]  py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2 "
            >
              Nos services
            </a>
            <a
              href="/about"
              className="bg-[#f4bff5] hover:bg-[#454699] text-[#454699] py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2"
            >
              En savoir plus
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
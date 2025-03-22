"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type ContactType = 'freelance' | 'entreprise';

interface FormData {
  type: ContactType;
  name: string;
  email: string;
  phone: string;
  company?: string;
  siret?: string;
  activity: string;
  message: string;
  social?: string;
}

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [contactType, setContactType] = useState<ContactType>('freelance');
  const [formData, setFormData] = useState<FormData>({
    type: 'freelance',
    name: '',
    email: '',
    phone: '',
    company: '',
    siret: '',
    activity: '',
    message: '',
    social: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleTypeChange = (type: ContactType) => {
    setContactType(type);
    setFormData(prev => ({
      ...prev,
      type,
      company: type === 'freelance' ? '' : prev.company,
      siret: type === 'freelance' ? '' : prev.siret,
      social: type === 'freelance' ? prev.social : ''
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }
      
      setFormData({
        type: contactType,
        name: '',
        email: '',
        phone: '',
        company: '',
        siret: '',
        activity: '',
        message: '',
        social: ''
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="/" className="block w-fit mx-auto mb-8">
          <Image 
            src="/images/logo.png" 
            alt="Logo Freewin" 
            width={120} 
            height={50}
            className="object-contain hover:opacity-80 transition-opacity"
          />
        </Link>
      </motion.div>

      <motion.section 
        className="max-w-2xl mx-auto mb-16"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#454699]"
          variants={itemVariants}
        >
          Nous Contacter
        </motion.h1>

        <motion.div 
          className="bg-white shadow-lg rounded-xl p-8"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <button
              onClick={() => handleTypeChange('freelance')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                contactType === 'freelance'
                  ? 'bg-[#454699] text-white'
                  : 'bg-gray-100 text-[#454699] hover:bg-gray-200'
              }`}
            >
              Freelance
            </button>
            <button
              onClick={() => handleTypeChange('entreprise')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                contactType === 'entreprise'
                  ? 'bg-[#454699] text-white'
                  : 'bg-gray-100 text-[#454699] hover:bg-gray-200'
              }`}
            >
              Entreprise
            </button>
          </motion.div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          <motion.form 
            className="space-y-4" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                {contactType === 'freelance' ? 'Nom complet' : 'Nom du contact'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder={contactType === 'freelance' ? 'Votre nom complet' : 'Nom du contact'}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {contactType === 'entreprise' && (
              <div>
                <label htmlFor="company" className="block mb-1 font-medium">Nom de l'entreprise <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {contactType === 'entreprise' && (
              <div>
                <label htmlFor="siret" className="block mb-1 font-medium">Numéro SIRET</label>
                <input
                  type="text"
                  id="siret"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                  placeholder="Numéro SIRET de l'entreprise"
                  value={formData.siret}
                  onChange={handleChange}
                />
              </div>
            )}

            {contactType === 'freelance' && (
              <div>
                <label htmlFor="social" className="block mb-1 font-medium">Instagram / LinkedIn</label>
                <input
                  type="text"
                  id="social"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                  placeholder="Votre nom d'utilisateur Instagram ou LinkedIn"
                  value={formData.social}
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Téléphone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="activity" className="block mb-1 font-medium">
                {contactType === 'freelance' ? 'Domaine d\'activité' : 'Secteur d\'activité'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="activity"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder={contactType === 'freelance' ? 'Votre domaine d\'activité' : 'Secteur d\'activité de l\'entreprise'}
                value={formData.activity}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#454699] text-white px-6 py-3 rounded-full font-medium hover:bg-[#454699]/90 transition-colors"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage; 
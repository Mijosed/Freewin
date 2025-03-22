"use client";

import React, { useState } from 'react';

// Pour utiliser EmailJS, vous devrez d'abord installer le paquet:
// npm install @emailjs/browser

// Ensuite, créez un compte sur emailjs.com et obtenez vos clés API

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      // Import EmailJS (à décommenter après installation)
      // const emailjs = await import('@emailjs/browser');
      
      // Les paramètres que vous aurez obtenus après avoir créé un compte EmailJS
      // Remplacez ces valeurs par les vôtres
      const SERVICE_ID = "service_50wdhcb";
      const TEMPLATE_ID = "template_gswqfa9";
      const PUBLIC_KEY = "XALdbnA5mziyprFJO";
      
      // Appel à EmailJS
      /*
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        PUBLIC_KEY
      );
      */
      
      // Pour le moment, simulons un appel réussi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Réinitialiser le formulaire après envoi réussi
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(true);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nous Contacter</h1>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Merci !</strong>
            <p className="block sm:inline"> Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
            <button 
              className="bg-[#454699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#454699]/90 transition-colors mt-4"
              onClick={() => setIsSubmitted(false)}
            >
              Envoyer un nouveau message
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                <p>{error}</p>
              </div>
            )}
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
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
                <label htmlFor="subject" className="block mb-1 font-medium">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
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
              <button
                type="submit"
                className="w-full bg-[#454699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#454699]/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Ce formulaire utilise EmailJS, un service avec un plan gratuit (100 emails/mois) pour gérer les formulaires de contact.
            </p>
          </div>
        )}
      </section>
    </div>
  );
} 
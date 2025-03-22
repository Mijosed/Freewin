"use client";

import React from 'react';

export default function ContactPage() {
  // Remplacez "xayprykd" par votre clé formspree obtenue lors de l'inscription
  const FORMSPREE_ID = "xayprykd";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nous Contacter</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
          
          {/* Formulaire Formspree - solution gratuite */}
          <form className="space-y-4" action={`https://formspree.io/f/${FORMSPREE_ID}`} method="POST">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 font-medium">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Sujet de votre message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454699]"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            
            {/* Champ caché anti-spam */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            
            <button
              type="submit"
              className="w-full bg-[#454699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#454699]/90 transition-colors"
            >
              Envoyer
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Ce formulaire est géré par Formspree, un service gratuit permettant de recevoir des formulaires de contact directement dans votre boîte mail.
          </p>
        </div>
      </section>
    </div>
  );
} 
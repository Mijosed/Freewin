import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Qui sommes nous</h1>
        
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. 
            Morbi vitae mauris in leo semper hendrerit. Etiam pulvinar nisi vitae massa tempus, vitae finibus enim finibus.
          </p>
          <p>
            Maecenas scelerisque mauris eget sapien tempus, molestie venenatis arcu ultrices. 
            Nullam id volutpat nisi. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
            <p>
              Suspendisse potenti. Vestibulum aliquam luctus sem, vitae euismod lorem varius ac. 
              Fusce posuere fermentum lorem, eget efficitur ante accumsan eget. In hac habitasse platea dictumst.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nos valeurs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovation et créativité</li>
              <li>Respect et transparence</li>
              <li>Excellence et qualité</li>
              <li>Responsabilité sociale</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#f4bff5] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez notre équipe</h2>
          <p className="mb-6">
            Nous sommes toujours à la recherche de nouveaux talents pour enrichir notre équipe.
          </p>
          <button className="bg-[#454699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#454699]/90 transition-colors">
            Voir nos offres d'emploi
          </button>
        </div>
      </section>
    </div>
  );
} 
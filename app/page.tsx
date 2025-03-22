import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue chez Freewin</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Notre plateforme innovante à votre service.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-[#f4bff5]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <circle cx="12" cy="10" r="2"></circle>
              <line x1="8" x2="8" y1="2" y2="4"></line>
              <line x1="16" x2="16" y1="2" y2="4"></line>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">Prospection clients</h2>
          <p>
           Nous aidons nos freelances avec un accompagnement personnalisé en démarchage et ciblage.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-[#f4bff5]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">Profil personnalisé</h2>
          <p>
            Nous accompagnons nos freelances à valoriser leur expertise pour attirer les clients idéaux.       
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-[#f4bff5]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
              <path d="M8 14h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 18h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M16 18h.01"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">Planning</h2>
          <p>
            Nous guidons nos freelances à structurer leur planning pour maximiser leur efficacité.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="bg-[#f4bff5]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path>
              <line x1="9" y1="9" x2="10" y2="9"></line>
              <line x1="9" y1="13" x2="15" y2="13"></line>
              <line x1="9" y1="17" x2="15" y2="17"></line>
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">Support administratif</h2>
          <p>
            Nous proposons des contrats personnalisés pour garantir des collaborations claires, équilibrées et adaptés à chaque freelance et client.
          </p>
        </div>
      </section>

      <section className="bg-[#f4bff5] rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Rejoignez-nous dès aujourd'hui</h2>
        <p className="mb-6">
          Découvrez tous les avantages que nous pouvons vous offrir.
        </p>
        <button className="bg-[#454699] text-white px-6 py-2 rounded-full font-medium hover:bg-[#454699]/90 transition-colors">
          En savoir plus
        </button>
      </section>
    </div>
  );
}

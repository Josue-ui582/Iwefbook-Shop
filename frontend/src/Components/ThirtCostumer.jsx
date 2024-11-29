import React from 'react';

const ThirtCostumer = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 rounded-full mr-4"
          src="Photo 3.jpg"
          alt="Axelle"
        />
        <div>
          <p className="font-bold">Akanni</p>
          <p className="text-gray-500 text-blue">@akanni_abdoulaye</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-text-base font-quicksand text-justify">
        J'ai été agréablement surpris par la qualité du service offert par Iwefe Book. Ils proposent un large choix de livres pour tous les goûts. J'ai rapidement trouvé ce que je cherchais et la livraison a été rapide.
      </p>
      <p className='text-text-base font-quicksand text-justify'>
        Je recommande Iwefe Book à tous les amateurs de lecture qui cherchent un service fiable et des livres de qualité.
      </p>
    </div>
  );
};

export default ThirtCostumer;
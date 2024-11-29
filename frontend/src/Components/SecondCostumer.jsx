import React from 'react';

const SecondCostumer = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 rounded-full mr-4"
          src="Photo 1.jpg"
          alt="Axelle"
        />
        <div>
          <p className="font-bold">Othiniel</p>
          <p className="text-gray-500 text-blue">@othiniel</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-text-base font-quicksand text-justify">
        Les livres que je commande chez Iwefe Book sont toujours d'une grande richesse et d'une qualité remarquable. Chaque ouvrage a une véritable source d'inspiration et d'apprentissage.
      </p>
      <p className='text-text-base font-quicksand text-justify'>
        Je recommande vivement Iwefe Book à tous ceux qui recherchent des lectures constructives et enrichissantes.
      </p>
    </div>
  );
};

export default SecondCostumer;
import React from 'react';

const FisrtCustomer = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 rounded-full mr-4"
          src="Photo 2.jpg"
          alt="Axelle"
        />
        <div>
          <p className="font-bold">Axelle</p>
          <p className="text-gray-500 text-blue">@axelle_kerene</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-text-base font-quicksand text-justify">
        Iwefebooks offre des services de qualité, ils sont très flexibles et s'adaptent à chaque client. Ils proposent une très grande variété de bouquins allant du développement personnel aux arlequins sans oublier les romans de fiction.
      </p>
    </div>
  );
};

export default FisrtCustomer;
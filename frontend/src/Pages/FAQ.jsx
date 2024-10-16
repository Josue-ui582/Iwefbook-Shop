import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqs = [
    {
      question: "Comment puis-je commander des livres avec iwefebooks ?",
      answer: "Pour commander des livres avec iwefebooks, je remplis le formulaire sur le site(lien). Nous vous reviendrons pour donner suite à votre commande.",
    },
    {
      question: "Combien coûte la commande ?",
      answer: "Le coût de votre commande dépend du prix de votre livre sur Amazon. Vous payez le prix du livre sur Amazon au taux de change de 800f/$ Le prix de l'expédition vous est facturé une fois le colis à Cotonou selon le poids de votre livre. Nous facturons le kg à 12.000f.",
    },
    {
      question: "Quel est le délai de livraison de la commande ?",
      answer: "Le délai de livraison est de 12 jours ouvrés. Ce délai peut aller de 25 à 30 jours en cas de retard. Nous vous informons dans ces cas.",
    },
    {
      question: "Que se passe-t-il lorsque mon livre n'a pas été livré ou est perdu ?",
      answer: "Lorsque votre livre est perdu ou n'est pas livré, nous vous rembourserons l'intégralité de vos frais d'achat.",
    },
    {
      question: "Que se passe-t-il lorsque je ne reçois pas exactement le livre que j'ai commandé ?",
      answer: "Lorsque vous ne recevez pas le livre que vous avez demandé, vous pouvez soit choisir de garder le livre contre un remboursement partiel de vos frais d'achat, soit retourner le livre pour un remboursement total de vos frais d'achat.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue">FAQ</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 focus:outline-none hover:text-blue"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h2>
                  <span>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className='text-center mt-20 font-bold text-blue hover:text-underline'>
        <Link to="/amazone">Quiter</Link>
      </p>
    </div>
  );
};

export default Faq;

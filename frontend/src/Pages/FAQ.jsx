import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        <motion.h1 
          className="text-3xl font-bold text-center mb-8 text-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          FAQ
        </motion.h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 focus:outline-none hover:text-blue"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h2>
                  <span>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
              </motion.button>
              {activeIndex === index && (
                <motion.div
                  className="px-4 py-3 bg-gray-50 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.p
        className="text-center mt-20 font-bold text-blue hover:text-underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link to="/amazone">Quitter</Link>
      </motion.p>
    </div>
  );
};

export default Faq;

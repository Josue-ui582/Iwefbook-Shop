import React, { useState } from "react";
import { motion } from "framer-motion";
import '../Style/BuyFrome.css';

const BuyFrome = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        searchBook: '',
        addLink: '',
        address: ''
    });

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Emails envoyés avec succès') {
                alert("Votre commande a été soumise avec succès ! Un email de confirmation vous a été envoyé.");
            } else {
                alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
        });
    }
    

    return (
        <motion.div
            className="flex justify-center items-center buyFrome_container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex flex-col"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                <motion.h1
                    className="text-3xl text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Remplissez ce formulaire pour commander un livre sur Amazon, nous vous reviendrons pour donner suite à votre requête
                </motion.h1>

                <motion.div
                    className="flex justify-center items-center mt-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <form action="submit" className="flex flex-col gap-4">
                        <div className="flex gap-6 flex-wrap">
                            <div className="flex flex-col">
                                <motion.label
                                    htmlFor="name"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Nom
                                </motion.label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    name="lastName"
                                    required
                                    className="border outline-none p-1 text-base rounded-lg"
                                    placeholder="Nom"
                                    onChange={handleInput}
                                    value={input.lastName}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                />
                            </div>

                            <div className="flex flex-col">
                                <motion.label
                                    htmlFor="prenom"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Prénom
                                </motion.label>
                                <motion.input
                                    type="text"
                                    id="prenom"
                                    name="firstName"
                                    required
                                    className="border outline-none p-1 text-base rounded-lg"
                                    placeholder="Prénom"
                                    onChange={handleInput}
                                    value={input.firstName}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                />
                            </div>
                        </div>

                        <motion.label
                            htmlFor="book"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Livre(s) Recherché(s)
                        </motion.label>
                        <motion.input
                            type="text"
                            id="book"
                            name="searchBook"
                            required
                            className="border outline-none p-1 text-base rounded-lg"
                            placeholder="Quel livre recherchez-vous ?"
                            onChange={handleInput}
                            value={input.searchBook}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        />

                        <motion.label
                            htmlFor="link"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Ajoutez un lien Amazon du livre
                        </motion.label>
                        <motion.input
                            type="text"
                            id="link"
                            name="addLink"
                            className="border outline-none p-1 text-base rounded-lg"
                            placeholder="Entrez un lien Amazon du livre"
                            onChange={handleInput}
                            value={input.addLink}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        />

                        <motion.label
                            htmlFor="address"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Numéro de téléphone ou email
                        </motion.label>
                        <motion.input
                            type="text"
                            id="address"
                            name="address"
                            required
                            className="border outline-none p-1 text-base rounded-lg"
                            placeholder="Numéro de téléphone ou adresse email"
                            onChange={handleInput}
                            value={input.address}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        />

                        <motion.button
                            type="submit"
                            className="border outline-none p-1 text-base rounded-lg bg-blue text-white hover:bg-blue text-white"
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Soumettre
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default BuyFrome;

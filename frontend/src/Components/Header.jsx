import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../Style/Header.css';

const Header = () => {
    return (
        <header className="w-full flex justify-center header items-center bg-slate-300">
            <motion.div 
                className="header-" 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1 
                    className="text-text-7xl text-center titre font-poppins"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    Bienvenue sur Iwefebooks
                </motion.h1>
                <motion.p 
                    className="flex justify-center font-baloo lg:font-semibold md:text-sm text-sm xl:text-text-xl text-center titre-p"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.5, delay: 0.4 }} 
                >
                    Améliorez votre vie professionnelle et personnelle avec de meilleurs livres
                </motion.p>
                <motion.p 
                    className="flex justify-center lg:mt-4xl md:text-base md:mt-4xl titre-p"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.8, delay: 0.6 }}
                >
                    <Link to="/livres-du-developpement-personnel" className="hover:underline duration-100 hover:text-blue font-quicksand text-text-2xl">
                        Visitez notre catalogue
                    </Link>
                </motion.p>
            </motion.div>
        </header>
    );
}

export default Header;

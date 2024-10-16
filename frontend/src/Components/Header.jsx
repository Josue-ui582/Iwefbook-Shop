import React from "react";
import { Link } from "react-router-dom";
import '../Style/Header.css'

const Header = () => {
    return(
        <header className="w-full flex justify-center header items-center bg-slate-300">
            <div className="w-full header-">
                <h1 className="text-7xl text-center"><span className="text-white">Bienvenue sur</span> <span className="titre">Iwefebooks</span></h1>
                <p className="flex justify-center text-white lg:font-semibold md:text-sm text-sm xl:text-xl text-center">Améliorez votre vie professionnelle et personnelle avec de meilleurs livres</p>
                <p className="flex justify-center lg:mt-4xl md:text-base md:mt-4xl text-white"><Link className="text-2xl hover:underline duration-100 hover:text-blue">Visitez notre catalogue</Link></p>
            </div>
        </header>
    )
}

export default Header
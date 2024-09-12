import React from "react";
import { Link } from "react-router-dom";
import '../Style/Header.css'

const Header = () => {
    return(
        <header className="w-full h-7xl flex justify-center items-center bg-slate-300">
            <div className="w-full">
                <h1 className="lg:text-7xl md:text-5xl text-3xl text-center">Bienvenu sur <span className="text-blue">Iwefebooks</span></h1>
                <p className="flex justify-center lg:font-semibold md:text-sm text-sm text-center">Améliorez votre vie professionnelle et personnelle avec de meilleurs livres</p>
                <p className="flex justify-center lg:mt-4xl md:text-base md:mt-4xl"><Link className="text-2xl hover:underline duration-100 hover:text-blue">Visitez notre catalogue</Link></p>
            </div>
        </header>
    )
}

export default Header
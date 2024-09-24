import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Activities from "./Activity";
import '../Style/Nav.css'


const Logo = ({alt, src}) => {

    return(
        <img src={src} alt={alt} />
    )
}

const NavBar = ({ cartCount }) => {

    // Gestion de l'état
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className="flex w-full justify-between px-4 py-4 fixed height">
            <div className="w-28 h-1">
                <Logo src='Logo.jpeg' alt='Iwefe Logo' />
            </div>

            <div className="flex">
                <ul className={`lg:flex md:items-center lg:space-x-6 absolute lg:static bg-white lg:bg-transparent w-full left-0 lg:w-auto transition-all duration-500 ease-in-out ${
                isOpen ? "top-16 flex flex-col items-center justify-center h-[100vh] gap-8" : "-top-96"
                    } lg:top-0`}>

                    <li className="relative">
                        <Link to="/" className="hover:bg-blue p-2 rounded hover:text-white duration-500 focus:bg-blue focus:text-white">Accueil</Link>
                    </li>
                    <li className="relative">
                        <Link to="/about" className="hover:bg-blue p-2 rounded hover:text-white duration-500 focus:bg-blue focus:text-white">A propos</Link>
                    </li>
                    <li className="relative">
                        <Activities />
                    </li>
                    <li className="relative">
                        <Link className="hover:bg-blue p-2 rounded hover:text-white duration-500 focus:bg-blue focus:text-white">Commander depuis amazon</Link>
                    </li>
                    <li className="relative">
                        <Link to='/contact' className="hover:bg-blue p-2 rounded hover:text-white duration-500 focus:bg-blue focus:text-white">Contactez-nous</Link>
                    </li>
                </ul>
                <div className="cart-container">
                    <Link>
                            <span class="material-symbols-outlined">shopping_cart</span>
                            {
                                cartCount > 0 && (
                                    <span className="cart-count">{cartCount}</span>
                                )
                            }
                    </Link>
                </div>
            </div>

            <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                <svg
                    className="h-6 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    className="w-6 h-6 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
                )}
            </div>
        </nav>
    )
}

export default NavBar
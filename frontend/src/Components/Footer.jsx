import React from "react";
import NewsletterForm from "./NewsletterForm";
import '../Style/Footer.css'
import { Link } from "react-router-dom";
import SocialsMedia from "./SocialsMedia";

const Logo = ({alt, src}) => {
    return(
        <img src={src} alt={alt} />
    )
}

const Footer = () => {
    return(
        <footer className="w-full">
            <div className=" mt-3xl p-8 lg:flex justify-between items-start">
                <div>
                    <div className="w-28 h-1 mb-2xl">
                        <Logo src='Logo.jpeg' alt='Iwefe Logo' />
                    </div>
                    <div className="w-full">
                        <p className="mb-4">Inscrivez-vous à notre newsletter pour ne rien rater de nos meilleures offres</p>
                        <NewsletterForm />
                    </div>
                </div>
                <div>
                    <p className="mb-4 rapide mt-5">Liens rapide</p>
                    <ul className="block gap-y-4">
                        <li className="mb-2">
                            <Link to="/" className="hover:underline p-2 rounded duration-500 ">Accueil</Link>
                        </li>
                        <li className="mb-2">
                            <Link className="hover:underline p-2 rounded duration-500 ">A propos</Link>
                        </li>
                        <li className="mb-2">
                            <Link className="hover:underline p-2 rounded duration-500 ">Catalogues</Link>
                        </li>
                        <li className="mb-2">
                            <Link className="hover:underline p-2 rounded duration-500 ">Commander depuis Amazon</Link>
                        </li>
                        <li className="mb-2">
                            <Link className="hover:underline p-2 rounded duration-500">Avis Clients</Link>
                        </li>
                        <li className="mb-2">
                            <Link className="hover:underline p-2 rounded duration-500 ">Contactez-nous</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <SocialsMedia />
            <p className="mt-2xl text-center">@2024 <span>Josué</span> | Tous droits réservés</p>
        </footer>
    )
}

export default Footer
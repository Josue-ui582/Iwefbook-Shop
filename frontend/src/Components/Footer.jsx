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
        <footer className="w-full footer">
            <div className=" mt-3xl pt-8 px-8 lg:flex justify-between items-start">
                <div>
                    <div className="w-full">
                        <p className="mb-4 text-white">Inscrivez-vous à notre newsletter pour ne rien rater de nos meilleures offres</p>
                        <NewsletterForm />
                    </div>
                </div>
                <div>
                    <p className="mb-4 rapide mt-5 text-white">Liens rapide</p>
                    <ul className="block gap-y-4">
                        <li className="mb-2 text-white">
                            <Link to="/" className="hover:underline p-2 rounded duration-500 ">Accueil</Link>
                        </li>
                        <li className="mb-2 text-white">
                            <Link className="hover:underline p-2 rounded duration-500 ">A propos</Link>
                        </li>
                        <li className="mb-2 text-white">
                            <Link className="hover:underline p-2 rounded duration-500 ">Catalogues</Link>
                        </li>
                        <li className="mb-2 text-white">
                            <Link className="hover:underline p-2 rounded duration-500 ">Commander depuis Amazon</Link>
                        </li>
                        <li className="mb-2 text-white">
                            <Link className="hover:underline p-2 rounded duration-500">Avis Clients</Link>
                        </li>
                        <li className="mb-2 text-white">
                            <Link className="hover:underline p-2 rounded duration-500 ">Contactez-nous</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <SocialsMedia />
            <p className="text-center text-white mt-4">@2024 <Link to='https://github.com/Josue-ui582' className="text-underline"> powered by Josué</Link> | Tous droits réservés</p>
        </footer>
    )
}

export default Footer
import React from "react";
import '../Style/Customer.css'

function User({name, description}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-base text-black">{description}</p>
            </div>
        </>
    )
}

const ThirtCostumer = () => {
    return(
        <div className="first">
            <div>
                <span class="material-symbols-outlined text-7xl text-blue">sentiment_content</span>
            </div>
            <div className="client_1">
                <User 
                description="J'ai été agréablement surpris par la qualité du service offert par cette entreprise. Leur site est facile à utiliser et propose un large choix de livres pour tous les goûts. J'ai rapidement trouvé ce que je cherchais et la livraison a été rapide. De plus, leur service client est réactif et à l'écoute. Je recommande vivement à tous les amateurs de lecture qui cherchent un service fiable et des livres de qualité."
                />
            </div>
            <div className="flex gap-6 items-center">
                <img src="Photo 3.jpg" alt="" className="first_img" />
                <p className="font-bold text-blue text-2xl">Akanni Abdoulaye</p>
            </div>
        </div>
    )
}

export default ThirtCostumer
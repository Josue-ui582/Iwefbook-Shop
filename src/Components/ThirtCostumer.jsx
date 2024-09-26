import React from "react";
import '../Style/Customer.css'

function User({name, description}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <h3 className="font-bold text-xl text-blue">{name}</h3>
                <p className="text-base text-black">{description}</p>
            </div>
        </>
    )
}

const ThirtCostumer = () => {
    return(
        <div className="first">
            <div className="client_1">
                <img src="Photo 3.jpg" alt="" className="first_img" />
                <User 
                name='Akanni Abdoulaye'
                description="J'ai été agréablement surpris par la qualité du service offert par cette entreprise. Leur site est facile à utiliser et propose un large choix de livres pour tous les goûts. J'ai rapidement trouvé ce que je cherchais et la livraison a été rapide. De plus, leur service client est réactif et à l'écoute. Je recommande vivement à tous les amateurs de lecture qui cherchent un service fiable et des livres de qualité."
                />
            </div>
        </div>
    )
}

export default ThirtCostumer
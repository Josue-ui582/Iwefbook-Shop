import React from "react";
import '../Style/Customer.css'

function User({name, description}) {
    return (
        <>
            <h3 className="font-bold text-xl text-white">{name}</h3>
            <p className="text-base text-white">{description}</p>
        </>
    )
}

const FisrtCustomer = () => {
    return(
        <div className="first">
            <div className="client_1">
                <img src="Photo 1.jpg" alt="" className="first_img" />
                <User 
                name='Othniel Degbelo'
                description="Je tiens à exprimer toute ma satisfaction envers iwefebooks. Les livres que je commande chez vous sont toujours d'une grande richesse et d'une qualité remarquable. Chaque ouvrage est une véritable source d’inspiration et d’apprentissage.Je recommande vivement iwefebooks à tous ceux qui recherchent des lectures constructives et enrichissantes.Merci pour votre engagement à offrir de tels trésors littéraires !"
                />
            </div>
        </div>
    )
}

export default FisrtCustomer
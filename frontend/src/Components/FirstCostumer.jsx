import React from "react";
import '../Style/Customer.css'

function User({description}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-base text-black">{description}</p>
            </div>
        </>
    )
}

const FisrtCustomer = () => {
    return(
        <div className="first">
            <div>
                <span className="material-symbols-outlined text-7xl text-blue">sentiment_content</span>
            </div>
            <div className="client_1">
                <User
                description="Je tiens à exprimer toute ma satisfaction envers iwefebooks. Les livres que je commande chez vous sont toujours d'une grande richesse et d'une qualité remarquable. Chaque ouvrage est une véritable source d’inspiration et d’apprentissage.Je recommande vivement iwefebooks à tous ceux qui recherchent des lectures constructives et enrichissantes.Merci pour votre engagement à offrir de tels trésors littéraires !"
                />
            </div>
            <div className="flex gap-6 items-center">
                <img src="Photo 1.jpg" alt="" className="first_img" />
                <p className="font-bold text-blue text-2xl">Othniel Degbelo</p>
            </div>
        </div>
    )
}

export default FisrtCustomer
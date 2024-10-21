import React from "react";
import NavBar from "../Components/NavBar";
import BuyFrome from "../Components/BuyFrome";
import { Link } from "react-router-dom";

const BuyFrom = () => {
    return(
        <section>
            <NavBar />
            <div className="flex flex-col items-center">
                <div className="form_to_buy">
                    <BuyFrome />
                </div>
                <div className="flex gap-2 mb-8">
                    <p className="text-center">En savoir plus sur la commande de livres sur Amazon ?</p>
                    <Link className="font-bold text-blue" to="/faq">
                        <p>FAQ </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BuyFrom
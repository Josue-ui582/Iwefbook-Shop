import React from "react";
import NavBar from "../Components/NavBar";
import BuyFrome from "../Components/BuyFrome";

const BuyFrom = () => {
    return(
        <section>
            <NavBar />
            <div className="form_to_buy">
                <BuyFrome />
            </div>
        </section>
    )
}

export default BuyFrom
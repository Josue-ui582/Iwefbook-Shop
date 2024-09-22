import React from "react";
import '../Style/Customer.css'

function User2({name, description}) {
    return(
        <>
            <h3 className="font-bold text-xl text-white">{name}</h3>
            <p className="text-base text-white">{description}</p>
        </>
    )
}

const SecondCostumer = () => {
    return(
        <div className="second">
            <div className="client_2">
                <img src="Photo 2.jpg" alt="" className="second_img" />
                <User2
                name='Axelle Keren'
                description="Iwefebooks offre des services de qualité, ils sont très flexibles et s'adaptent à chaque client. Ils proposent une très grande variété de bouquins allant du développement personnel aux arlequins sans oublier les romans de fiction."
                />
            </div>
        </div>
    )
}

export default SecondCostumer
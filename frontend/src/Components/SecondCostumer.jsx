import React from "react";
import '../Style/Customer.css'

function User2({name, description}) {
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <h3 className="font-bold text-xl text-blue">{name}</h3>
                <p className="text-base text-black">{description}</p>
            </div>
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
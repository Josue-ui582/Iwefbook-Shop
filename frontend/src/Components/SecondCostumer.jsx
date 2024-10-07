import React from "react";
import '../Style/Customer.css'

function User2({description}) {
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-base text-black">{description}</p>
            </div>
        </>
    )
}

const SecondCostumer = () => {
    return(
        <div className="second">
            <div>
                <span className="material-symbols-outlined text-7xl text-blue">sentiment_content</span>
            </div>
            <div className="client_2">
                <User2
                description="Iwefebooks offre des services de qualité, ils sont très flexibles et s'adaptent à chaque client. Ils proposent une très grande variété de bouquins allant du développement personnel aux arlequins sans oublier les romans de fiction."
                />
            </div>
            <div className="flex gap-6 items-center">
                <img src="Photo 2.jpg" alt="" className="second_img" />
                <p className="font-bold text-blue text-2xl">Axelle Keren</p>
            </div>
        </div>
    )
}

export default SecondCostumer
import React from "react";
import '../Style/Quality.css'

const Img = ({src, alt}) => {
    return(
        <img src={src} alt={alt} />
    )
}

const Quality = () => {
    return(
        <section className="text-center">
            <h2 className="mb-6 lg:text-4xl md:text-3xl">Pourquoi nous choisir ?</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center md:flex-wrap md:gap-2">
                <div className="border-2 lg:p-8 p-2 rounded-lg quality">
                    <Img src="livraison.png" alt="f2"/>
                    <p className="text-center">Livraison gratuite</p>
                </div>
                <div className="border-2 lg:p-8 p-2 rounded-lg quality">
                    <Img src="f4.png" alt="f4"/>
                    <p className="text-center">Livres de qualité</p>
                </div>
                <div className="border-2 lg:p-8 p-2 rounded-lg quality">
                    <Img src="f3.png" alt="f3" className="flex justify-center" />
                    <p className="text-center">Garantie ou rembousé</p>
                </div>
                <div className="border-2 lg:p-8 p-2 rounded-lg quality">
                    <Img src="f5.png" alt="f5"/>
                    <p className="text-center">Support client 24h/24h</p>
                </div>
            </div>
        </section>
    )
}

export default Quality
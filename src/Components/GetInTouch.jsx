import React from "react";
import '../Style/Contact.css'
import SocialsMedia from "./SocialsMedia";

const GetInTouch = () => {
    return(
        <div>
                <h3 className="text-3xl font-bold">Prenons contact</h3>
                <p>Vous avez une préoccupation particulière, une question n'hésitez pas à nous contacter :</p>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-4 p-4 email rounded hover:shadow-md">
                        <span className="material-symbols-outlined text-5xl ">forward_to_inbox</span>
                        <div>
                            <p className="font-bold">Email</p>
                            <p>iwefebooks@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 email rounded hover:shadow-md">
                    <span class="material-symbols-outlined text-5xl">call</span>
                        <div>
                            <p className="font-bold">Téléphone</p>
                            <p>+229 69 73 97 97</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center">
                    <p>Réseaux sociaux :</p>
                    <span><SocialsMedia /></span>
                </div>
            </div>
    )
}

export default GetInTouch
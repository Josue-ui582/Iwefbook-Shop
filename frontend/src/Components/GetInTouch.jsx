import React from "react";
import '../Style/Contact.css'
import SocialsMedia from "./SocialsMedia";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const GetInTouch = () => {
    return(
            <div className="getintouch_container">
                <h3 className="text-3xl font-bold">Prenons contact</h3>
                <p>Vous avez une préoccupation particulière, une question, n'hésitez pas à nous contacter :</p>
                <div className="flex gap-4 mt-6 overflow-hidden contact_fast flex-wrap">
                    <a href="mailto:hounhouijosue1@gmail.com">
                        <div className="flex items-center gap-4 p-4 email rounded hover:shadow-md overflow-hidden email_section">
                        <CiMail />
                            <div>
                                <p className="font-bold">Email</p>
                                <p>iwefebooks@gmail.com</p>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="flex items-center gap-4 p-4 email rounded hover:shadow-md overflow-hidden contact_section">
                        <FaPhoneAlt />
                            <div>
                                <p className="font-bold">Téléphone</p>
                                <p>+229 69 73 97 97</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <p>Réseaux sociaux :</p>
                    <SocialsMedia />
                </div>
            </div>
    )
}

export default GetInTouch
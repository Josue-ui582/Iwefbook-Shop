import React from "react";
import { Link } from "react-router-dom";
import '../Style/Customer.css'

const CostumerManager = () => {
    return (
        <section className="client">
            <h5 className="text-center mb-2xl text-5xl">Service client</h5>
            <div className="flex justify-around gap-6 items-center">
                <div>
                    <p className="text-2xl font-medium">
                        Profiter de nos <span className="service">service en gestion client</span> pour avoir de réponse à vos <span className="preoccu">préoccupations</span>
                    </p>
                    <div className="mt-4xl">
                        <Link className="p-2 link">Contactez-nous</Link>
                    </div>
                </div>
                <div>
                    <img className="rounded-xl" src="service-client.jpg" alt="service-client" />
                </div>
            </div>
        </section>
    )
}

export default CostumerManager
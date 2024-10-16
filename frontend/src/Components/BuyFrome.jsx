import React, { useState } from "react";
import '../Style/BuyFrome.css'

const BuyFrome = () => {

    const [input, setInput] = useState({
        firstName : '',
        lastName : '',
        searchBook : '',
        addLink : '',
        address : ''
    });

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            firstName : '',
            lastName : '',
            searchBook : '',
            addLink : '',
            address : ''
        })
    }

    return(
        <div className="flex justify-center items-center buyFrome_container">

            <div className="flex flex-col">

                <h1 className="text-3xl text-center">Remplissez ce formulaire pour commander un livre sur Amazon, nous vous reviendrons pour donner suite à votre requête</h1>

                <div className="flex justify-center items-center mt-20">

                    <form action="submit" className="flex flex-col gap-4">
                        
                        <div className="flex gap-6 flex-wrap">

                            <div className="flex flex-col">

                                <label htmlFor="name">Nom</label>

                                <input 
                                    type="text" 
                                    id="name" 
                                    name="lastName"
                                    required 
                                    className="border outline-none p-1 text-base rounded-lg" 
                                    placeholder="Nom" 
                                    onChange={handleInput} 
                                    value={input.lastName}
                                />

                            </div>

                            <div className="flex flex-col">

                                <label htmlFor="prenom">Prénom</label>

                                <input 
                                    type="text" 
                                    id="prenom" 
                                    name="firstName"
                                    required 
                                    className="border outline-none p-1 text-base rounded-lg" 
                                    placeholder="Prénom" 
                                    onChange={handleInput} 
                                    value={input.firstName}
                                />
                            </div>

                        </div>

                        <label htmlFor="book">Livre(s) Recherché(s)</label>

                        <input 
                            type="text" 
                            id="book" 
                            name="searchBook"
                            required 
                            className="border outline-none p-1 text-base rounded-lg" 
                            placeholder="Quel livre recherchez-vous ?" 
                            onChange={handleInput} 
                            value={input.searchBook}
                        />
                        <label htmlFor="link">Ajoutez un lien Amazon du livre</label>

                        <input 
                            type="text" 
                            id="link" 
                            name="addLink"
                            className="border outline-none p-1 text-base rounded-lg" 
                            placeholder="Entrez un lien Amazon du livre" 
                            onChange={handleInput} 
                            value={input.addLink}
                        />

                        <label htmlFor="address">Numéro de téléphone ou email</label>

                        <input 
                            type="text" 
                            id="address" 
                            name="address"
                            required 
                            className="border outline-none p-1 text-base rounded-lg" 
                            placeholder="Numéro de téléphone ou adresse email" 
                            onChange={handleInput} 
                            value={input.address}
                        />

                        <button 
                            type="submit" 
                            className="border outline-none p-1 text-base rounded-lg bg-blue text-white hover:bg-blue text-white" 
                            onClick={handleSubmit}
                        >
                            Soumettre
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default BuyFrome
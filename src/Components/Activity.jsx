import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/Cart.css'



const Activities = () => {
    const [showSubLinks, setShowSubLinks] = useState(false);

    function handleCartClick () {
        setShowSubLinks(!showSubLinks)
    }
    return(
        <>
            <button className="hover:bg-blue p-2 rounded hover:text-white duration-500 focus:bg-blue focus:text-white" onClick={handleCartClick}>Catalogue</button>
            <div className={`dropdown ${showSubLinks ? 'active' : ''}`}>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/amazone">Livres de développement personnel</Link></button>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/cart">Romans et Harlequins</Link></button>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/cart"> Livres d'auteurs africains</Link></button>
          </div>
        </>
    );
}

export default Activities
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../Style/Cart.css'



const Activities = () => {
    const [showSubLinks, setShowSubLinks] = useState(false);
    const menuRef = useRef(null);

    function handleCartClick () {
        setShowSubLinks(!showSubLinks)
    }

    useEffect(() => {
        
        function handleClickOutside(e) {
            
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowSubLinks(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showSubLinks]);

    return(
        <>
            <button className="duration-500 hover:bg-blue" onClick={handleCartClick}>Catalogue</button>
            <div ref={menuRef} className={`dropdown ${showSubLinks ? 'active' : ''}`}>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/livres-du-developpement-personnel">Livres de développement personnel</Link></button>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/romans-et-harlequins">Romans et Harlequins</Link></button>
                <button className="dropdown-item hover:bg-blue p-2 rounded hover:text-white duration-500"><Link to="/livres-d auteur-africain">Livres d'auteurs africains</Link></button>
          </div>
        </>
    );
}

export default Activities
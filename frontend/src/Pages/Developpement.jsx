import {React, useState} from "react";
import NavBar from "../Components/NavBar";
import category_1 from '../Data1.json';
import { Link } from "react-router-dom";
import '../Style/Product.css';

const Developpement = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    return(
        <section>
            <NavBar />
            <div className="flex flex-col items-center justify-center product">
                <div>
                    <p className="mt-2xl text-center mb-3xl lg:text-5xl md:text-3xl text-3xl">Les livres du développement personnel</p>
                </div>
                <div className="lg:flex lg:overflow-hidden lg:justify-center md:flex md:overflow-hidden md:justify-center flex overflow-hidden justify-center">
                    <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-2 md:grid-cols-3 grid-cols-2">
                        {category_1.map((categori_1) => (
                            <div key={categori_1.id} className="product-container">
                                <img src={categori_1.src} alt={categori_1.title} className="rounded product-image" />
                                <div className="mt-2">
                                    <div className="button-container">
                                        {/*<Link className="add-to-cart" onClick={onAddToCart}>Ajouter au panier</Link>*/}
                                        <Link
                                            className="add-to-cart" 
                                            onClick={() => handleShowDetails(categori_1)}>
                                            Voir les détails
                                        </Link>
                                        <Link className="buy-now">Acheter</Link>
                                    </div>
                                    <div className="flex wrap w-6xl product-title">
                                          <p className="font-semibold text-center">{categori_1.price}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold available">{categori_1.available}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                {selectedProduct && (
                    <div className="product-details-overlay">
                        <div className="product-details">
                            <h2>{selectedProduct.title}</h2>
                            <p>{selectedProduct.description}</p>
                            <button onClick={handleCloseDetails}>Fermer</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Developpement
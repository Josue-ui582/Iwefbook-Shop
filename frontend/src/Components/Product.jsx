import React, { useState } from "react";
import products from '../Data.json';
import { Link } from "react-router-dom";
import '../Style/Product.css';

const Product = ({ onAddToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="product">
            <div className="product-">
                <p className="mt-2xl text-center mb-3xl lg:text-5xl md:text-3xl text-3xl">Nos livres disponibles</p>
                <div className="lg:flex lg:overflow-hidden lg:justify-center md:flex md:overflow-hidden md:justify-center flex overflow-hidden justify-center">
                    <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-2 md:grid-cols-3 grid-cols-2">
                        {products.map((product) => (
                            <div key={product.id} className="product-container">
                                <img src={product.src} alt={product.title} className="rounded product-image" />
                                <div className="mt-2">
                                    <div className="button-container">
                                        {/*<Link className="add-to-cart" onClick={onAddToCart}>Ajouter au panier</Link>*/}
                                        <Link
                                            className="add-to-cart" 
                                            onClick={() => handleShowDetails(product)}>
                                            Voir les détails
                                        </Link>
                                        
                                        {product.price === "4000 CFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2NBQHE4S4MBGOFXXG23FPE6VCQ2CJI2TOMJGOBQWOZKOMFWWKPKMNF3HEZJGMRSXGY3SNFYHI2LPNY6VM33VOMQHEZLDMV3HEZL2EBWGKIDMNF3HEZJAYOQCA3DBEBWGS5TSMFUXG33O/${product.id}`}>Acheter</Link>
                                        )}

                                        {product.price === "10000 CFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2MJQGA4TQLRQEZYW643LMV4T2UKDIJFDKNZREZYGCZ3FJZQW2ZJ5JRUXM4TFEZSGK43DOJUXA5DJN5XD2VTPOVZSA4TFMNSXM4TFPIQGYZJANRUXM4TFEDB2AIDMMEQGY2LWOJQWS43PNY======/${product.id}`}>Acheter</Link>
                                        )}

                                        {product.price === "15000 CFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2MJVGE4TSLRQEZYW643LMV4T2UKDIJFDKNZREZYGCZ3FJZQW2ZJ5JRUXM4TFEZSGK43DOJUXA5DJN5XD2VTPOVZSA4TFMNSXM4TFPIQGYZJANRUXM4TFEDB2AIDMMEQGY2LWOJQWS43PNY======/${product.id}`}>Acheter</Link>
                                        )}
                                    </div>
                                    <div className="flex wrap w-6xl product-title">
                                          <p className="font-semibold text-center">{product.price}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold available">{product.available}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="flex justify-center mt-2xl">
                    <Link to="/developpementpersonnel" className="p-2 rounded-xl border-solid border-2 view">Voir plus</Link>
                </p>

                
                {selectedProduct && (
                    <div className="product-details-overlay">
                        <div className="product-details">
                            <h2>{selectedProduct.title}</h2>
                            <p className="text-justify">{selectedProduct.description}</p>
                            <button onClick={handleCloseDetails}>Fermer</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;
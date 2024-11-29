import React, { useState } from "react";
import products from '../Data.json';
import { Link } from "react-router-dom";
import '../Style/Product.css';

const Product = () => {
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
                <p className="mt-2xl text-center mb-3xl lg:text-text-5xl md:text-text-4xl font-quicksand text-text-3xl">Nos livres disponibles</p>
                <div className="lg:flex lg:overflow-hidden lg:justify-center md:flex md:overflow-hidden md:justify-center flex overflow-hidden justify-center">
                    <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-2 md:grid-cols-3 grid-cols-2">
                        {products.map((product) => (
                            <div key={product.id} className="product-container">
                                <img src={product.src} alt={product.title} className="rounded product-image" />
                                <div className="mt-2">
                                    <div className="button-container">
                                        <Link
                                            className="add-to-cart" 
                                            onClick={() => handleShowDetails(product)}>
                                            Voir les détails
                                        </Link>
                                        
                                        {product.price === "4000 FCFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2NBQHE4S4MBGOFXXG23FPE6VCQ2CJI2TOMJGOBQWOZKOMFWWKPKMNF3HEZJGMRSXGY3SNFYHI2LPNY6VM33VOMQHEZLDMV3HEZL2EBWGKIDMNF3HEZJAYOQCA3DBEBWGS5TSMFUXG33O/${product.id}`}>Acheter</Link>
                                        )}

                                        {product.price === "10000 FCFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2MJQGA4TQLRQEZYW643LMV4T2UKDIJFDKNZREZYGCZ3FJZQW2ZJ5JRUXM4TFEZSGK43DOJUXA5DJN5XD2VTPOVZSA4TFMNSXM4TFPIQGYZJANRUXM4TFEDB2AIDMMEQGY2LWOJQWS43PNY======/${product.id}`}>Acheter</Link>
                                        )}

                                        {product.price === "15000 FCFA" && (
                                            <Link target="_blank" rel="noopener noreferrer" className="buy-now" to={`https://dashboard.qosic.com/JF3WKZTFEUZDAQTPN5VXGL3QMF4T65DJORZGKPLVNYYXA4TPMRMGW6LON53SM4LUMU6TCLRQEZQW233VNZ2D2MJVGE4TSLRQEZYW643LMV4T2UKDIJFDKNZREZYGCZ3FJZQW2ZJ5JRUXM4TFEZSGK43DOJUXA5DJN5XD2VTPOVZSA4TFMNSXM4TFPIQGYZJANRUXM4TFEDB2AIDMMEQGY2LWOJQWS43PNY======/${product.id}`}>Acheter</Link>
                                        )}
                                    </div>
                                    <div className="flex wrap w-6xl product-title">
                                          <p className="font-semibold text-center">{product.price}</p>
                                    </div>
                                    <div>
                                        <p className="available text-xl">{product.available}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="flex justify-center mt-2xl">
                    <Link to="/livres-du-developpement-personnel" className="p-2 rounded-xl border-solid border-2 view">Voir plus</Link>
                </p>

                
                {selectedProduct && (
                    <div className="product-details-overlay">
                        <div className="product-details">
                            <div className="mb-10">
                                <span className="text-text-3xl font-bold font-quicksand">{selectedProduct.title}</span> <br />
                                <span className="font-poppins text-text-base font-semibold">{selectedProduct.author}</span>
                            </div>
                            <p className="text-justify font-quicksand">{selectedProduct.description}</p>
                            <button onClick={handleCloseDetails}>Fermer</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product;
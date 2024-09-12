import React, {useState} from "react";
import products from '../Data.json'
import { Link } from "react-router-dom";
import '../Style/Product.css'


const Product = () => {

    return(
        <section>
            <div>
                <p className="mt-2xl text-center mb-3xl lg:text-5xl md:text-3xl text-3xl">Nos Produits</p>
                <div className="lg:flex lg:overflow-hidden lg:justify-center md:flex md:overflow-hidden md:justify-center flex overflow-hidden justify-center">
                    <div className="grid lg:grid-cols-4 lg:gap-8 md:gap-2 md:grid-cols-3 grid-cols-2 ">
                        {products.map((product) => (
                            <div key={product.id} className="product-container">
                                <img src={product.src} alt={product.title} className="rounded product-image md:w-150 md:h-150 lg:w-170 lg:h-200 w-130 h-180" />
                                <div className="mt-2">
                                    <div className="button-container">
                                        <Link className="add-to-cart">Ajouter au panier</Link>
                                        <Link className="buy-now">Acheter</Link>
                                    </div>
                                    <div className="flex wrap w-6xl product-title">
                                        <p className="font-semibold text-center">{product.price}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold available">{product.available}</p>
                                        <Link className="p-1 rounded-xl detail">{product.detail}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="flex justify-center mt-2xl">
                    <Link className="p-2 rounded-xl border-solid border-2 view">Voir plus</Link>
                </p>
            </div>
        </section>
    )
}

export default Product
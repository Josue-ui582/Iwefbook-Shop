import * as React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import Quality from '../Components/Quality'
import Product from '../Components/Product'
import CostumerReview from '../Components/CostumerManger'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const Home = () => {
    const [cartCount, setCartCount] = useState(0);

    function handleAddToCart() {
        setCartCount(cartCount + 1);
    }

    return(
        <section>
            <NavBar cartCount={cartCount} />
            <Header />
            <Quality />
            <Product onAddToCart={handleAddToCart} />
            <CostumerReview />
            <Footer />
        </section>
    )
}

export default Home;
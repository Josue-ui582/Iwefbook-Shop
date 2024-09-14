import * as React from 'react'
import Header from '../Components/Header'
import Quality from '../Components/Quality'
import Product from '../Components/Product'
import CostumerReview from '../Components/CostumerManger'
import Footer from '../Components/Footer'

const Home = () => {
    return(
        <section>
            <Header />
            <Quality />
            <Product />
            <CostumerReview />
            <Footer />
        </section>
    )
}

export default Home
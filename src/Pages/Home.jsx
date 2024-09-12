import * as React from 'react'
import Header from '../Components/Header'
import Quality from '../Components/Quality'
import Product from '../Components/Product'
import CostumerManager from '../Components/CostumerManger'
import Footer from '../Components/Footer'

const Home = () => {
    return(
        <section>
            <Header />
            <Quality />
            <Product />
            <CostumerManager />
            <Footer />
        </section>
    )
}

export default Home
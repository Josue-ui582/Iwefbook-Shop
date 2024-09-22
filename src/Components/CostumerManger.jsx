import React from 'react';
import { Carousel } from 'antd';
import FisrtCustomer from './FirstCostumer';
import SecondCostumer from './SecondCostumer';
import ThirtCostumer from './ThirtCostumer';
import '../Style/Customer.css'

const CostumerReview = () => (
  <>
  <h2 className="mt-2xl text-center mb-3xl lg:text-5xl md:text-3xl text-3xl">Ce que disent nos clients</h2>
    <section className=' costumer_section'>
      <Carousel autoplay>
      <div className='client'>
        <FisrtCustomer />
      </div>
      <div className='client'>
        <SecondCostumer />
      </div>
      <div className='client'>
        <ThirtCostumer />
      </div>
      <div className='client'>
        <SecondCostumer />
      </div>
      </Carousel>
    </section>
  </>
);

export default CostumerReview;
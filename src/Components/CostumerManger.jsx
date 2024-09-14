import React from 'react';
import { Carousel } from 'antd';
import FisrtCustomer from './FirstCostumer';
import SecondCostumer from './SecondCostumer';
import '../Style/Customer.css'

const CostumerReview = () => (
  <section className=' costumer_section'>
    <Carousel autoplay>
    <div className='client'>
      <FisrtCustomer />
    </div>
    <div className='client'>
      <SecondCostumer />
    </div>
    <div className='client'>
      <FisrtCustomer />
    </div>
    <div className='client'>
      <SecondCostumer />
    </div>
  </Carousel>
  </section>
);

export default CostumerReview;
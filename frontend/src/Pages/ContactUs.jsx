import React from 'react';
import '../Style/ContactUs.css';
import GetInTouch from '../Components/GetInTouch';
import ContactForme from '../Components/ContactForm';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ContactUs = () => {
    return (
        <section>
            <NavBar />
            <div className='w-100'>
                <div className='h-200 w-100 contact flex justify-center items-center overflow-hidden'>
                    <div className=''>
                        <p className='text-3xl'>Contactez-nous</p>
                    </div>
                </div>
                <div className='flex justify-center gap-4 mt-12 overflow-hidden contact_container'>
                    <div className='phone_number_section'>
                        <ContactForme />
                    </div>
                    <div className='form_section'>
                        <GetInTouch />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactUs;

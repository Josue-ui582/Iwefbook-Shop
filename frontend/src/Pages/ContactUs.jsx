import React from 'react'
import '../Style/Contact.css'
import GetInTouch from '../Components/GetInTouch'
import ContactForme from '../Components/ContactForm'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const ContactUs = () => {     
    return(
        <section>
            <NavBar />
            <div className='h-200 w-100 contact flex justify-center items-center overflow-hidden'>
                <div>
                    <p className='text-white text-3xl'>#Contactez-nous</p>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-12 overflow-hidden flex-wrap'>
               <div>
                    <GetInTouch />
               </div>
               <div>
                    <ContactForme />
               </div>
            </div>
            <Footer />
        </section>
    )
}

export default ContactUs
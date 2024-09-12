import React from 'react'
import '../Style/Contact.css'
import GetInTouch from '../Components/GetInTouch'
import ContactForm from '../Components/ContactForm'

const ContactUs = () => {
    return(
        <section>
            <div className='h-6xl w-100 contact flex justify-center items-center'>
                <div>
                    <p className='text-white text-3xl'>#Contactez-nous</p>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-12'>
               <div>
                    <GetInTouch />
               </div>
               <div>
                    <ContactForm />
               </div>
            </div>
        </section>
    )
}

export default ContactUs
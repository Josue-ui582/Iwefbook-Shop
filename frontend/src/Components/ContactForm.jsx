import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../Style/ContactForme.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("movqawwp");
  if (state.succeeded) {
      return <h3 >Merci pour votre soumission !</h3>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='flex gap-6 flex-wrap name_section'>
        <div className='flex justify-start flex-col'>
          <label htmlFor="firstname">
            Nom <span className='text-red'>*</span>
          </label>
          <input 
            type="text" 
            id="firstname" 
            name='firstname'
            required
            className='border rounded-lg outline-none p-1 firstname'
          />
          <ValidationError 
            prefix='Nom'
            field='firstname'
            errors={state.errors}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="lastname">
            Prénom <span className='text-red'>*</span>
          </label>
          <input type="text" 
            id='lastname'
            name='lastname'
            required
            className='border rounded-lg outline-none p-1 lastname'
          />
          <ValidationError 
            prefix='Prénom'
            field='lastname'
            errors={state.errors}
          />
        </div>

      </div>
      <label htmlFor="email">
        Addresse Email <span className='text-red'>*</span>
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
        className='border rounded-lg outline-none p-1'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message <span className='text-red'>*</span>
      </label>
      <textarea
        id="message"
        name="message"
        className='border rounded-lg outline-none p-1'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='border rounded-lg outline-none p-1 bg-blue hover:bg-blue text-white'>
        Submit
      </button>
    </form>
  );
}

function ContactForme() {
  return (
    <ContactForm />
  );
}

export default ContactForme;
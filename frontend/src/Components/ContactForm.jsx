import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage('Message envoyé avec succès !');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        setStatusMessage(`Erreur : ${data.error}`);
      }
    } catch (error) {
      setStatusMessage('Erreur lors de l\'envoi des données.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='contact_form'>
        <div className='flex gap-6'>
          <div className='flex flex-col'>
            <label>Prénom</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className='outline-none text-base border rounded pl-1'
            />
          </div>
          <div className='flex flex-col'>
            <label>Nom</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className='outline-none text-base border rounded pl-1'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='outline-none text-base border rounded pl-1'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className='outline-none text-base border rounded pl-1'
          />
        </div>
        <button type="submit" className='mt-3 rounded p-2 bg-blue hover:text-black text-white'>Envoyer</button>
      </form>
      {statusMessage && <p className='mt-2 font-bold text-green'>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;

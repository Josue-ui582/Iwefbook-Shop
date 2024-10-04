import { useState } from "react";
import React from "react";
import '../Style/Footer.css'
import Notification from "./Notification";



const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const NewsletterForm  = () => {
    const [email, setEmail] = useState('')
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email)) {
            console.log('Email soumis :' , email)
            setNotification({
                message : 'Merci pour votre inscription !',
                type : 'success'
            })
            setEmail('')
        } else {
            setNotification({
                message: 'Veuillez entrer un email valide.',
                type: 'error'
              });
            setEmail('')
        }
    }

    const handleCloseNotification = () => {
        setNotification(null);
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={email}
                    onChange={handleChange}
                    placeholder="Entrez votre email"
                    required
                    className="p-2 outline-none rounded-xl"
                />
                <button type="submit" className="ml-4 p-2 rounded-xl text-white">S'inscrire</button>
            </form>
            {notification && (
                <Notification
                    message={notification.message}
                    onClose={handleCloseNotification}
                    type={notification.type}
                    className="mt-4xl"
                />
            )}
        </div>
    )
}

export default NewsletterForm 
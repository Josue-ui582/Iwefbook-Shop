const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

sgMail.setApiKey('0ygjkMUFGQno6uHCVGGUjDMDDsp8dbVP');

app.post('/submit-form', async (req, res) => {
    const { firstName, lastName, searchBook, addLink, address } = req.body;

    const userMailOptions = {
        to: address,
        from: 'iwefebooks@gmail.com',
        subject: 'Confirmation de votre commande',
        text: `Bonjour ${firstName} ${lastName},\n\nMerci pour votre commande de livre. Nous vous contacterons bientôt pour finaliser les détails.\n\nCordialement,\nL'équipe IwefeBooks...`
    };

    const adminMailOptions = {
        to: 'iwefebooks@gmail.com',
        from: 'iwefebooks@gmail.com',
        subject: 'Nouvelle soumission de commande de livre',
        text: `Une nouvelle commande a été soumise.\n\nInformations utilisateur:\nNom: ${firstName} ${lastName}\nLivre recherché: ${searchBook}\nLien Amazon: ${addLink}\nContact: ${address}`
    };

    try {
        
        await sgMail.send(userMailOptions);
        await sgMail.send(adminMailOptions);
        res.status(200).json({ message: 'Emails envoyés avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi des emails:', error);
        res.status(500).json({ message: 'Échec de l\'envoi des emails', error: error.response ? error.response.body : error });
    }
});

module.exports = app;



/*VUGCXK5SSNADZ3P5HT4FD1SB*/
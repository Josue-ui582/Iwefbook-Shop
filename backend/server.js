require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'iwefe',
  password: 'edmond9755',
  port: 5432,
});


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running !')
});

const transporter = nodemailer.createTransport({
  'service' : 'gmail',
  auth : {
    user: 'iwefebooks@gmail.com',
    pass: 'yourpassword'
  }
});

app.post('/submit', (req, res) => {
  const { firstName, lastName, searchBook, addLink, address } = req.body;

  const userMailOptions = {
    from: 'iwefebooks@gmail.com',
    to: address,
    subject: 'Confirmation de votre commande',
    text: `Bonjour ${firstName},\n\nVotre commande du livre "${searchBook}" a bien été reçue. Nous vous contacterons bientôt.\n\nMerci!`
  };

  const companyMailOptions = {
    from: 'iwefebooks@gmail.com',
    to: 'iwefebooks@gmail.com',
    subject: 'Nouvelle commande de livre',
    text: `Nouvelle soumission reçue:\n\nNom: ${firstName} ${lastName}\nLivre recherché: ${searchBook}\nLien Amazon: ${addLink}\nContact: ${address}`
  };

  transporter.sendMail(userMailOptions, (error, info) => {
    if (error) {
        return res.status(500).send('Erreur lors de l\'envoi de l\'email à l\'utilisateur');
    }
  });

  transporter.sendMail(companyMailOptions, (error, info) => {
    if (error) {
        return res.status(500).send('Erreur lors de l\'envoi de l\'email à l\'entreprise');
    }
    res.status(200).send('Soumission réussie et emails envoyés');
  });
})

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();
const { join } = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(join(__dirname, '../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../frontend/dist', 'index.html'));
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.post('/api/contacts', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO contacts (first_name, last_name, email, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, email, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de l\'insertion dans la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la soumission du formulaire' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

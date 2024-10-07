require('dotenv').config();

const express = require('express');
const cors = require('cors');
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
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running !')
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

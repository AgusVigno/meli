const express = require('express');
const cors = require('cors');

// crear el servidor
const app = express();

// habilitar express.json
app.use(express.json({ extended: true }));

// habilitar cors
app.use(cors());

// importar rutas
app.use('/api/', require('./routes/items'));

module.exports = app;

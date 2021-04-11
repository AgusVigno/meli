const express = require('express');
const cors = require('cors');
const unknow = require('./middleware/unknow');

// crear el servidor
const app = express();

// habilitar express.json
app.use(express.json({ extended: true }));

// habilitar cors
app.use(cors());

// importar rutas
app.use('/api/', require('./routes/items'));

// middleware catch 404
app.use(unknow);

module.exports = app;

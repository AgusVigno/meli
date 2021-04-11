const config = require('./constants/config');

// server.js
const app = require('./server');

// arrancar la app
app.listen(config.PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${config.PORT}`);
});

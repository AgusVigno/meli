module.exports = (req, res, next) => {
  res.status(404).send({
    status: 404,
    msg: 'Endpoint no disponible. Consultar metodos disponibles de la API.',
  });
  return next();
};

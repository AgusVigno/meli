const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Obtener los productos y detalle de un producto
router.get('/items', itemController.getProducts);
router.get('/items/:id', itemController.getProductById);

// Obtener los producto por categoría
router.get('/category', itemController.getProductsByCategory);

module.exports = router;

const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Obtener los productos
router.get('/items', itemController.getProducts);
router.get('/items/:id', itemController.getProductById);

// Obtener categorías de un producto
router.get('/categories/:id', itemController.getCategory);

module.exports = router;

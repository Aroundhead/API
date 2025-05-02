const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

router.get('/', productosController.obtenerTodos);
router.get('/buscar', productosController.buscarPorCodigo);

module.exports = router;

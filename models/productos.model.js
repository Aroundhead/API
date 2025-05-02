const db = require('../config/db');

const Producto = {};

Producto.getAll = (callback) => {
    db.query('SELECT * FROM productos', callback);
};

Producto.buscarPorCodigo = (codigo, callback) => {
    db.query('SELECT nombre, precio, imagen FROM productos WHERE id = ?', [codigo], callback);
};

module.exports = Producto;


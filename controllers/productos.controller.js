const Producto = require('../models/productos.model');

exports.obtenerTodos = (req, res) => {
    Producto.getAll((err, resultados) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener productos' });
        } else {
            res.json(resultados);
        }
    });
};

exports.buscarPorCodigo = (req, res) => {
    const codigo = req.query.codigo;
   
    if (!codigo || isNaN(codigo) || codigo.includes(',')) {
        return res.status(400).json({
            status: 400,
            message: "El código debe ser un número único válido"
        });
    }

    Producto.buscarPorCodigo(codigo, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: 500, message: "Error interno" });
        }

        if (result.length === 0) {
            return res.status(404).json({ status: 404, message: "Producto no encontrado" });
        }

        const producto = result[0];
        return res.status(200).json({
            status: 200,
            producto_nombre: producto.nombre,
            producto_precio: producto.precio,
            producto_imagen: producto.imagen
        });
    });
};

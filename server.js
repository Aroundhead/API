const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', productosRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

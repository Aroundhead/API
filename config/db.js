const mysql = require('mysql2');
require('dotenv').config(); // Cargar variables del archivo .env

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('❌ Error al conectar a la BD:', err);
    } else {
        console.log('✅ Conectado a MySQL');
    }
});

module.exports = db;

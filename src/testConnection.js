const { Sequelize } = require('sequelize');
// Cargar la configuración
const config = require('../config/config'); // Ajusta la ruta si es necesario

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
});

// Probar la conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    })
    .finally(() => {
        sequelize.close(); // Cerrar la conexión
    });

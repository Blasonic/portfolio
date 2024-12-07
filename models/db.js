const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolio'
});

db.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      process.exit(1); // Salir si hay un error
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
  
  module.exports = db;


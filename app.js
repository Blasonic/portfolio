const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const db = require('./models/db'); // Importa la conexión a la base de datos
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configura Handlebars y el directorio de layouts
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.handlebars',
  })
);
app.set('view engine', 'handlebars');

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para obtener datos de la base de datos
app.get('/', (req, res) => {
  const queryEquipo = 'SELECT * FROM equipo';
  const queryTrabajos = 'SELECT * FROM trabajos_equipo';

  // Consultar datos del equipo
  db.query(queryEquipo, (err, resultadosEquipo) => {
    if (err) {
      console.error('Error al obtener datos del equipo:', err);
      return res.status(500).send('Error al obtener datos del equipo');
    }

    // Consultar datos de los trabajos
    db.query(queryTrabajos, (err, resultadosTrabajos) => {
      if (err) {
        console.error('Error al obtener datos de los trabajos:', err);
        return res.status(500).send('Error al obtener datos de los trabajos');
      }

      // Renderizar la vista con los datos
      res.render('main', {
        title: 'Bienvenido a mi Portfolio',
        equipo: resultadosEquipo,
        trabajos: resultadosTrabajos,
      });
    });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});









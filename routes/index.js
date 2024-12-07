const express = require('express');
const router = express.Router();
const { obtenerDatosEquipo } = require('../controlador/datosControlador');

// Ruta principal
router.get('/', obtenerDatosEquipo);

module.exports = router;



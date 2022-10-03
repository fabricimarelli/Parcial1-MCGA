const express = require('express'); // requiero archivos de la libreria express

const productos = require('./products') // guardo en variable la ruta productos

const router = express.Router(); // Instancio el router

const ping = require('./ping') // Guardar en una variable la ruta de ping

router.use('/productos', productos); //pongo en uso las rutas

router.use('/ping', ping);

module.exports = router //importo el router en otros archivos
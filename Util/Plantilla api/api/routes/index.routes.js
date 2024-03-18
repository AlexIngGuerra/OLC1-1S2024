// Imports para crear las rutas
const express = require('express');
const router = express.Router();

// Imports de las funciones que estan en controller
const indexController = require("../controller/index.controller.js")

// Agregar aqui las rutas que necesitan
router.get("/", indexController.index);


// Exportar para accderlo desde otro archivo
module.exports = router;
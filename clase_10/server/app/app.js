// Imports de las librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Creamos la app que ejecuta la api
const app = express();

// Permitir a la api cualquier origen
// Sin esto no funcionará des de el frontend
var corsOptions = {
    origin: "*"
}

// Middlewares
app.use(morgan('dev')); // Para ver las peticiones que llegan a la api
app.use(express.json()); // Para utilizar json en el body [NO PUEDE FALTAR]
app.use(cors(corsOptions)); //Habilitar cors en la api

// ROUTES
const indexRoutes = require("../routes/index.routes.js")//Import de rutas

app.use("/", indexRoutes);//Ingresar una rutas


// Si no encuentra la ruta entonces muestra Not found
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });


// Export para accederlo desde otros archivos
module.exports = app;
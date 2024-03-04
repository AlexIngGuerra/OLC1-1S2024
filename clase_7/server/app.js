const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

var corsOptions = {
    origin: "*"
}

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // No puede faltar
app.use(cors(corsOptions));

// ROUTES
const indexRoutes = require("./routes/index.routes.js")

app.use("/", indexRoutes);

// DEFAULT
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });

module.exports = app;
const analizador = require("../analizador/parser.js");

// Función principal, verifica que funcione la api
const index = (req, res) => {
    res.status(200).json({message: "Estoy funcionando!"}) // respuesta
}

// Funcion analizar, permite utilizar el analizador
const analizar = (req, res) => {
    const {entrada} = req.body; // obtener informacion del body
    let resultado = analizador.parse(entrada); // analizamos la entrada
    res.status(200).json({message: "Funcion analizar", salida: resultado}) //respuesta
}


module.exports = {
    index,
    analizar
}
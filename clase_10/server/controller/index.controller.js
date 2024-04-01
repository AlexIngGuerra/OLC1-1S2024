const analizador = require("../analizador/parser.js");
const Entorno = require("../interprete/entorno/Entorno.js");

// Función principal, verifica que funcione la api
const index = (req, res) => {
    res.status(200).json({message: "Estoy funcionando!"}) // respuesta
}

const analizar = (req, res) => {
    const {entrada} = req.body;

    // Enviamos la entrada a analizar
    let resultado = analizador.parse(entrada);
    // Creamos entorno global
    let entornoGlobal = new Entorno("GLOBAL", null);
    // Ejecutamos las intrucciones
    resultado.forEach(instruccion => {
        instruccion.interpretar(entornoGlobal);
    });

    res.status(200).json({message: "Funcion analizar"})
}


// Exportar para usarlo en otros archivos
module.exports = {
    index, analizar
}
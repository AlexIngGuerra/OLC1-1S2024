const analizador = require("./analizador/parser.js");

let entrada = `
    println(1+"cadena" * 5);
    println("Hola Mundo");
`;

let resultado = analizador.parse(entrada); // analizamos la entrada

resultado.forEach(instruccion => {
    instruccion.interpretar(null);
});
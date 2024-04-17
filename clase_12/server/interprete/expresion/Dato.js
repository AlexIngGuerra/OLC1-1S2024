const {Expresion} = require("../Expresion.js")

class Dato extends Expresion {
    constructor(valor, tipo, fila, columna){
        super(valor, tipo, fila, columna);
    }

    interpretar(entorno){
        return this;
    }
  
}


module.exports = Dato;
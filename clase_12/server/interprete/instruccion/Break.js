const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");

class Break extends Instruccion{
    constructor(fila, columna){
        super(TipoInstr.BREAK, fila, columna);
    }

    interpretar(entorno){
        return this;
    }

}

module.exports = Break
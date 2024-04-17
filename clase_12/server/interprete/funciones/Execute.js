const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");

class Break extends Instruccion{
    constructor(callfuncion, fila, columna){
        super(TipoInstr.BREAK, fila, columna);
        this.callfuncion = callfuncion;
    }

    interpretar(entorno){
        this.callfuncion.interpretar(entorno);
        return this;
    }

}

module.exports = Break
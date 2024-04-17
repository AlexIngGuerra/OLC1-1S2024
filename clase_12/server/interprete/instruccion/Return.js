const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");

class Return extends Instruccion{
    constructor(expresion, fila, columna){
        super(TipoInstr.BREAK, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        return this;
    }
}

module.exports = Return;
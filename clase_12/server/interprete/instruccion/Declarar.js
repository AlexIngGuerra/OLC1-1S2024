const { Instruccion, TipoInstr } = require("../Instruccion");
const { TipoSimbolo } = require("../entorno/Simbolo");

class Declarar extends Instruccion{
    constructor(id, tipo, expresion, fila, columna){
        super(TipoInstr.DECLARAR, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);

        if(this.expresion.tipo != this.tipo){
            console.log("Error semántico: Error de tipo de dato en declaracion de variable");
            return this;
        }

        entorno.addSimbolo(this.id, this.expresion, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);

        return this;
    }
}

module.exports = Declarar;
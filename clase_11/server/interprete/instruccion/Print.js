const { arreglo } = require("../../util/data");
const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");


class Print extends Instruccion{

    constructor(expresion, fila, columna){
        super(TipoInstr.PRINT, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        
        if (this.expresion.tipo == TipoDato.ERROR){
            console.log("Error Semántico: No se puede imprimir negativos.")
            return this;
        }

        console.log(this.expresion.valor);
        arreglo.push(this.expresion.valor);
        return this;
    }
}

module.exports = Print;
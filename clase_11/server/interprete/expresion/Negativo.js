const { Expresion, TipoDato } = require("../Expresion");

class Negativo extends Expresion{
    
    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){

        this.expresion.interpretar(entorno);

        if(this.expresion.tipo === TipoDato.INT){
            this.tipo = TipoDato.INT;
            this.valor = -1 * this.expresion.valor;
            return this;
        }

        console.log("Error Semántico: Error en la operacion negativo.")
        return this;
    }

}

module.exports = Negativo;
const Instruccion = require("../Instruccion.js");

class Dato extends Instruccion{
    constructor(valor, tipo){
        super();
        this.tipo = tipo;
        this.valor = valor;
    }

    interpretar(entorno){
        switch(this.tipo){
            case 'INT': return Number(this.valor);
            case 'STRING': return this.valor;
        }
    }

}

module.exports = Dato;
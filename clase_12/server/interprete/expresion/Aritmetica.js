const { Expresion, TipoDato } = require("../Expresion");


class Aritmetica extends Expresion{

    constructor(izq, op, der, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.izq = izq;
        this.der = der;
        this.op = op;
    }

    interpretar(entorno){
        this.izq.interpretar(entorno);
        this.der.interpretar(entorno);
        
        if(this.op == "+"){
            if(this.izq.tipo == TipoDato.INT && this.der.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.izq.valor) + Number(this.der.valor);
                return this;
            }
            // AQUI ERROR SEMANTICO
            return this;
        }
        else if (this.op == "*"){
            if(this.izq.tipo == TipoDato.INT && this.der.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.izq.valor) * Number(this.der.valor);
                return this;
            }
            // AQUI ERROR SEMANTICO
            return this;
        }
        // AQUI ERROR SEMANTICO
        return this;
    }

}

module.exports = Aritmetica;
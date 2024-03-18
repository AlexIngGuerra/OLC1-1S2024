const Instruccion = require("../Instruccion.js");

class Aritmetica extends Instruccion{
    constructor(expIzq, operador, expDer){
        super();
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }

    interpretar(entorno){
        let valorIzq = this.expIzq.interpretar(null);
        let valorDer = this.expDer.interpretar(null);

        if(this.operador == "+"){
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }

            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo de dato");
                return this.valor;
            }
        }

        else if(this.operador == "*"){

            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }

            else{
                this.tipo == "ERROR";
                console.log("Error Semántico: Error de tipo de dato");
                return this.valor;
            }
        }


    }

}

module.exports = Aritmetica;
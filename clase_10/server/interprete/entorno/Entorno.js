const { Expresion, TipoDato } = require("../Expresion");
const { Simbolo } = require("./Simbolo");

class Entorno{
    constructor(nombre, anterior){
        this.nombre = nombre;
        this.anterior = anterior;
        this.tablaSim = {};
        this.tablaFunc = {};
    }

    addSimbolo(nombre, valor, tipo, tipoVar, fila, columna){
        if(nombre in this.tablaSim){
            console.log("Semantico: Variable ya declarada");
            return;
        }
        this.tablaSim[nombre] = new Simbolo(nombre, valor, tipo, tipoVar, fila, columna);
    }

    getSimbolo(nombre){
        let ent = this;
        while(ent != null){
            if(!(nombre in ent.tablaSim)){
                ent = ent.anterior;
            }
            return ent.tablaSim[nombre]
        }
        return new Expresion("ERROR", TipoDato.ERROR, 0, 0);
    }
    
}


module.exports = Entorno;

const { Expresion, TipoDato } = require("../Expresion");
const { TipoInstr } = require("../Instruccion");
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

    esCiclo(){
        let ent = this;
        while(ent != null){
            if(ent.nombre == TipoInstr.WHILE){
                return true;
            }
            ent = ent.anterior;
        }
        return false;
    }

    addFuncion(nombre, funcion){
        if(nombre in this.tablaFunc){
            // error semantico
            return;
        }
        this.tablaFunc[nombre] = funcion;
    }

    getFuncion(nombre){}
}


module.exports = Entorno;

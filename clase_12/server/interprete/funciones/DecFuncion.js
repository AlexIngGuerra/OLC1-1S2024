const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const Funcion = require("./Funcion");

class DecFuncion extends Instruccion{

    constructor(nombre, retorno, parametros, instrucciones, fila, columna){
        super(TipoInstr.FUNCION, fila, columna);
        this.nombre = nombre;
        this.retorno = retorno;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }

    interpretar(entorno){
        let funcion = new Funcion(this.nombre, this.retorno, this.parametros, this.instrucciones, fila, columna);
        entorno.addFuncion(nombre, funcion);
        return this;
    }
}

module.exports = DecFuncion;
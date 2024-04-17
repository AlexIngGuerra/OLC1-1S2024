const {Expresion, TipoDato} = require("../Expresion.js");
const { TipoInstr } = require("../Instruccion.js");
const Entorno = require("../entorno/Entorno.js");
const Dato = require("../expresion/Dato.js")

class CallFuncion extends Expresion {

    constructor(nombre, parametros, fila, columna){
        super(new Dato("ERROR", TipoDato.ERROR, fila, columna), TipoDato.ERROR, fila, columna);
        this.nombre = nombre;
        this.parametros = parametros;
    }

    interpretar(entorno){

        let entornoParametros = new Entorno(TipoInstr.FUNCION, entorno);
        let entornoFuncion = new Entorno(TipoInstr.FUNCION, entornoParametros);
        let funcion = entorno.getFuncion(this.nombre);

        // Paso 1: Actualizar los paramatros
        for (let i = 0; i < this.parametros.length; i++) {
            funcion.parametros[i].expresion = this.parametros[i].interpretar(entornoParametros);
            funcion.parametros[i].interpretar(entornoParametros);
        }

        for (let i = 0; i < this.instrucciones.length; i++) {
            let instruccion = this.instrucciones[i]
            instruccion.interpretar(entornoFuncion);
            
            if(instruccion.tipo == TipoInstr.RETURN){
                this.valor = instruccion.expresion;
                this.tipo = instruccion.expresion.tipo;
                return this;
            }
        }

        return this;
    }
  
}


module.exports = CallFuncion;
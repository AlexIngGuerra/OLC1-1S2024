
const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");

class While extends Instruccion{
    constructor(condicion, instrucciones, fila, columna){
        super(TipoInstr.WHILE, fila, columna);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }

    interpretar(entorno){
        let entornoWhile = new Entorno(TipoInstr.WHILE, entorno);
        this.condicion.interpretar(entornoWhile);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion debe ser tipo boolean");
            return this;
        }

        while(String(this.condicion.valor).toLowerCase() === "true"){
            let result = TipoInstr.While;
            for (let i = 0; i < this.instrucciones.length; i++) {
                let instruccion = this.instrucciones[i]
                instruccion.interpretar(entornoWhile);
                if(instruccion.tipo == TipoInstr.BREAK){
                    result = TipoInstr.BREAK;
                    break;
                }
            }

            if(result == TipoInstr.BREAK){
                break;
            }
            // else if(continue){}

            this.condicion.interpretar(entornoWhile);
        }

        return this;
    }

}

module.exports = While;
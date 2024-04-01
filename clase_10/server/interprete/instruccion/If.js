const { TipoDato } = require("../Expresion");
const { Instruccion, TipoInstr } = require("../Instruccion");
const Entorno = require("../entorno/Entorno");

class If extends Instruccion{
    constructor(condicion, instr_if, fila, columna){
        super(TipoInstr.IF, fila, columna);
        this.condicion = condicion;
        this.instr_if = instr_if;
    }

    interpretar(entorno){
        let entornoIf = new Entorno(TipoInstr.IF, entorno);
        this.condicion.interpretar(entornoIf);

        if(this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semántico: la condicion del if debe ser tipo boolean");
            return this;
        }

        if(String(this.condicion.valor).toLowerCase() === "true"){
            this.instr_if.forEach(instruccion => {
                instruccion.interpretar(entornoIf);
            });
        }
        else{
            // Ejecución del else If o else
        }
        // Guardar entorno
        return this;
    }

}

module.exports = If
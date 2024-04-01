class Instruccion{
    constructor(tipo, fila, columna){
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    interpretar(entorno){}
}

const TipoInstr = {
    PRINT: 'PRINT',
    IF: 'IF',
    DECLARAR: 'DECLARAR'
}

module.exports = {Instruccion, TipoInstr}
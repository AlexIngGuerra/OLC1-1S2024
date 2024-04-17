class Simbolo{
    constructor(nombre, valor, tipo, tipoVar, fila, columna){
        this.nombre = nombre;
        this.valor = valor;
        this.tipo = tipo;
        this.tipoVar = tipoVar;
        this.fila = fila;
        this.columna = columna;
    }
}

const TipoSimbolo = {
    VARIABLE: 'VARIABLE',
    ARREGLO: 'ARREGLO',
    FUNCION: 'FUNCION'
}

module.exports = {Simbolo, TipoSimbolo};
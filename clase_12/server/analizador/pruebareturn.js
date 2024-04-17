const { TipoDato } = require("../interprete/Expresion");
const Entorno = require("../interprete/entorno/Entorno.js");
const Dato = require("../interprete/expresion/Dato.js");
const Break = require("../interprete/instruccion/Break.js");
const If = require("../interprete/instruccion/If.js");
const Print = require("../interprete/instruccion/Print.js");
const While = require("../interprete/instruccion/While.js");


let instrprint = new Print(new Dato("Hola Mundo", TipoDato.CADENA,0,0), 0,0);
let insrtbreak = new Break(0,0);
let instrIf = new If(new Dato("true", TipoDato.BOOLEAN, 0,0), [insrtbreak], 0, 0);
let instrIf2 = new If(new Dato("true", TipoDato.BOOLEAN, 0,0), [instrIf], 0, 0);
let resultado = [new While(new Dato("true", TipoDato.BOOLEAN, 0,0), [instrprint, instrIf2], 0,0)];

/*
while(true){
    print("Hola Mundo");
    if(true){
        break;
    }
}
*/

let entornoGlobal = new Entorno("GLOBAL", null);
resultado.forEach(instruccion => {
    instruccion.interpretar(entornoGlobal);
});
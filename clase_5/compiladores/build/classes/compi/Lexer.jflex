// ------------  Paquete e importaciones ------------
package compi; 

import java_cup.runtime.*;

%%	
//-------> Directivas (No tocar)

%public 
%class Lexer
%cup
%char
%column
%line
%unicode
%ignorecase

%{ 
%} 

// ------> Expresiones Regulares 

entero = [0-9]+
cadena = [\"][^\n\"]*[\"]
id = [a-zA-Z][a-zA-Z0-9_]*

%%
// ------------  Reglas Lexicas -------------------
// Palabras reservas
"println"   {return new Symbol(sym.RPRINT, yycolumn, yyline, yytext());}

// Simbolos
"!"         {return new Symbol(sym.EXCL, yycolumn, yyline, yytext());}
"("         {return new Symbol(sym.PARIZQ, yycolumn, yyline, yytext());}
")"         {return new Symbol(sym.PARDER, yycolumn, yyline, yytext());}
","         {return new Symbol(sym.COMA, yycolumn, yyline, yytext());}
"="         {return new Symbol(sym.IGUAL, yycolumn, yyline, yytext());}
";"         {return new Symbol(sym.PYC, yycolumn, yyline, yytext());}

// Operadores
"+"         {return new Symbol(sym.MAS, yycolumn, yyline, yytext());}

// Expresiones
{entero}    {return new Symbol(sym.ENTERO, yycolumn, yyline, yytext()); }
{cadena}    {return new Symbol(sym.CADENA, yycolumn, yyline, yytext());}

{id}        {return new Symbol(sym.ID, yycolumn, yyline, yytext());}

//------> Ingorados 
[ \t\r\n\f]     {/* Espacios en blanco se ignoran */}

//------> Errores Léxicos 
.           	{ System.out.println("Error Lexico: " + yytext() + " | Fila:" + yyline + " | Columna: " + yycolumn); }



// ------------  Paquete e importaciones ------------
package compiler; 

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

%%
// ------------  Reglas Lexicas -------------------
"SUM"     {return new Symbol(sym.SUM, yycolumn, yyline, yytext()); }
","       {return new Symbol(sym.COMA, yycolumn, yyline, yytext()); }
";"       {return new Symbol(sym.PYC, yycolumn, yyline, yytext()); }

{entero}  {return new Symbol(sym.ENTERO, yycolumn, yyline, yytext()); }


//------> Ingorados 
[ \t\r\n\f]     {}

//------> Errores Léxicos 
.           	{ System.out.println("Error Lexico: " + yytext() + " | Fila:" + yyline + " | Columna: " + yycolumn); }


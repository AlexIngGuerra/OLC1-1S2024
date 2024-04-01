// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;
cadena [\"][^\n\"]*[\"];
booleano ("true"|"false");

%%
// -----> Reglas Lexicas
"println"       {return "RPRINT";}
"if"			{return "IF"; }

"+"             {return "MAS";}
"*"             {return "POR";}
"-"             {return "MENOS";}

"("             {return "PARIZQ"; }
")"             {return  "PARDER"; }
"{"				{return "LLAVEIZQ"; }
"}"				{return "LLAVEDER"; }
";"             {return  "PYC"; }


{entero}        { return 'ENTERO'; } 
{cadena}        { return 'CADENA';}
{booleano}		{ return 'BOOL';}      

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
%{
	// ENUMERACIONES
	const { TipoDato } = require("../interprete/Expresion.js");

	// EXPRESIONES
	const Dato = require("../interprete/expresion/Dato.js");
	const Negativo = require("../interprete/expresion/Negativo.js");
	const Aritmetica = require("../interprete/expresion/Aritmetica.js");   

    // INSTRUCCIONES
    const Print = require("../interprete/instruccion/Print.js");
	const If = require("../interprete/instruccion/If.js");
%} 

// -------> Precedencia
%left 'MAS' //'MENOS'
%left 'POR' //'DIVIDIDO'
%right UMENOS

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: instrucciones EOF  			{$$ = $1; return $$; }
;

instrucciones
	: instrucciones instruccion		{$$ = $1; $$.push($2);}
	| instruccion 					{$$ = []; $$.push($1);}
	| error { console.error('Error Sintactico: ' + yytext + ' - linea: ' + this._$.first_line + ' - columna: ' + this._$.first_column); }
;

instruccion
	: print 		{$$ = $1}
	| instrif     	{$$ = $1}
;

print 
    : RPRINT PARIZQ expresion PARDER PYC    { $$ = new  Print($3, @1.first_line, @1.first_column); }
;

instrif
	: IF PARIZQ expresion PARDER LLAVEIZQ instrucciones LLAVEDER    	{$$ = new If($3, $6, @1.first_line, @1.first_column);}
;

expresion
	: MENOS expresion %prec UMENOS  { $$ = new Negativo($2, @1.first_line, @1.first_column); }
	| expresion MAS expresion       { $$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column); }
	| expresion POR expresion       { $$ = new Aritmetica($1, $2, $3, @1.first_line, @1.first_column); }
	| PARIZQ expresion PARDER       { $$ = $1; }
	| ENTERO                        { $$ = new Dato($1, TipoDato.INT, @1.first_line, @1.first_column); }
	| CADENA                        { $$ = new Dato($1, TipoDato.CADENA, @1.first_line, @1.first_column);  }
	| BOOL							{ $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column);  }
;
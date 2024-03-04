// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;
cadena [\"][^\n\"]*[\"];

%%
// -----> Reglas Lexicas
"println"       {return "RPRINT";}
"("             {return "PARIZQ"; }
")"             {return  "PARDER"; }
";"             {return  "PYC"; }


{entero}        { return 'ENTERO'; } 
{cadena}        { return 'CADENA';}         

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia

//%left 'MAS' 'MENOS'

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: listainstr EOF 
;

listainstr 
    : listainstr instruccion
    | instruccion
;

instruccion
	: print     
	| error PYC 	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print 
    : RPRINT PARIZQ expresion PARDER PYC    { console.log($3); }
;

expresion 
    : ENTERO    { $$ = $1; }
    | CADENA    { $$ = $1; }
;
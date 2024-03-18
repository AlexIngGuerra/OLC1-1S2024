// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;
cadena [\"][^\n\"]*[\"];

%%
// -----> Reglas Lexicas
"println"       {return "RPRINT";}

"+"             {return "MAS";}
"*"             {return "POR";}

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
%{
    const Dato = require("../interprete/expresion/Dato.js");
    const Print = require("../interprete/instruccion/Print.js");
    const Aritmetica = require("../interprete/expresion/Aritmetica.js");
%}    

%left 'MAS'
%left 'POR'

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: listainstr EOF {$$ = $1; return $$; }
;

listainstr 
    : listainstr instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); }
;

instruccion
	: print         { $$ = $1; }   
	| error PYC 	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print 
    : RPRINT PARIZQ expresion PARDER PYC    { $$ = new Print($3); }
;

expresion 
    : ENTERO    { $$ = new Dato($1, 'INT');  }
    | CADENA    { $$ = new Dato($1, 'STRING'); }
    | expresion MAS expresion       {$$ = new Aritmetica($1, $2, $3);}
    | expresion POR expresion       {$$ = new Aritmetica($1, $2, $3);}
;
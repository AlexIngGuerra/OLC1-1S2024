let result = ['EXECUTE', 'FUNCION1', 'ASIGNACION1', 'ASIGNACION2', 'FUNCION2', 'EXECUTE'];


for (let i = 0; i < result.length; i++) {
    if(result[i] != 'EXECUTE'){
        console.log("Interpretando: "+result[i]);
    }
}

let executeIniciado = false;
for (let i = 0; i < result.length; i++) {
    if(result[i] == 'EXECUTE' && !executeIniciado){
        executeIniciado = true;
        console.log("Interpretando: "+result[i]);
    }else if(result[i] == 'EXECUTE' && executeIniciado){
        // Error semantico solo puede existir un EXECUTE
        console.log("Error semantico: Execute repetido")
    }
}
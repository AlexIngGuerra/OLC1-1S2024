EXECUTE main();

int var1 = 0;

int arreglo1[] = new int[5];
int arreglo2[] = [0,0,1,2,0,0,5,1,0,0,8,0,0];

void main(){
    cout << "Archivo de prueba\n";
    cout << "Si sale compi1" << endl;

    int var1 = 10;

    if(var1 == 0){
        cout << "Manejo de ambitos erroneo :'(" << endl;
    }else{
        cout << "Manejo de ambitos correcto" << endl;
    }

   // tabla de multiplicar
   tablaMultiplicar(5);

   // recursividad
   recursividadBasica();

   // arreglos
    AnalizarArreglo(arreglo1);

    cout << "Fin de la prueba" << endl;

}


void tablaMultiplicar(int valor){
    std::string cadenaSalida = "Final de la tabla de multiplicar";
    for(int i=1; i<=11; i++){
        cout << valor + " x " + i + " = " + valor*i << endl;
        if(i==11){
            cout << cadenaSalida << endl;
            break;
        }
    }
}

// probando una funcion recursiva
int mcd(int a, int b){
    if(b==0){
        return a;
    }else{
        return mdc(b, a%b);
    }
}

void recursividadBasica(){
    int resultado = mcd(48, 18);

   if(resultado == 6){
        cout << "Funcion recursiva correcta" << endl;
        return;
   }
   cout << "Funcion recursiva incorrecta" << endl;
}

// viendo arreglos
void AnalizarArreglo(int arreglo[]){
    int temporal, suma, ceros;
    for(int i=0; i<arreglo.length(); i++){
        temporal = arreglo[i];
        if(temporal == 0){
            ceros = ceros + 1;
            continue;
        }
        suma = suma + temporal;
    }
    cout << "La suma de los elementos del arreglo es: " + suma << endl;
    cout << "La cantidad de ceros en el arreglo es: " + ceros << endl;
}

// Salida de archivo de prueba
/*
Archivo de prueba
Si sale compi1
Manejo de ambitos correcto
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
Final de la tabla de multiplicar
Funcion recursiva correcta
La suma de los elementos del arreglo es: 17
La cantidad de ceros en el arreglo es: 8
Fin de la prueba
*/
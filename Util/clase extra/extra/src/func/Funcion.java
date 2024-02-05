package func;

import java.util.LinkedList;


public class Funcion {
    public static LinkedList<String> lista = new LinkedList<>();
    
    public static String Suma(String a, String b){
        int izq = Integer.parseInt(a);
        int der = Integer.parseInt(b);
        return String.valueOf(izq+der);
    }
}

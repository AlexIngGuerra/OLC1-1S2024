package util;

import java.util.HashMap;
import java.util.LinkedList;


public class Instruccion {
   
    public static HashMap<String, String> tablaSimb = new HashMap<>();
    
    public static void print(String exp){
        System.out.println(exp);
    }
    
    public static void mostrarLista(LinkedList<String> lista){
        lista.forEach((element) -> {
            System.out.println(element);
        });
    }
    
    
}

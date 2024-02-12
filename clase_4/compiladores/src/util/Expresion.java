/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package util;

/**
 *
 * @author Alexander
 */
public class Expresion {
    
    public static String suma(String izq, String der){
        // Casteamos los valores
        double val1 = Double.parseDouble(izq);
        double val2 = Double.parseDouble(der);
        
        // Calculamos la suma
        double resultado = val1 + val2;
        
        //Devolvemos un String con el resultado
        return String.valueOf(resultado);
    }
    
    
}

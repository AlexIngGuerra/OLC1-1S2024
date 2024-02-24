package util;


public class Expresion {
    
    public static String suma(String izq, String der){
        // Casteamos los valores
        String resultadoString = "";
        
        try {
            double val1 = Double.parseDouble(izq);
            double val2 = Double.parseDouble(der);
            double resultado = val1 + val2;
            resultadoString = String.valueOf(resultado);
            
        } catch (NumberFormatException e) {
            resultadoString = "Error";
        }
        
        return resultadoString;
    }
    
    
}

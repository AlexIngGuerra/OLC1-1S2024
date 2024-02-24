package main;

import java.io.StringReader;

public class Main {

    public static void main(String[] args) {
        // Generar Analizadores
        //analizadores("src/compi/", "Lexer.jflex", "Parser.cup");
        
        String entrada = """
                        a = "Hola Mundo";
                        suma = 3 + 5;
                        resultado = suma + 2;
                        println!(a);
                        println!(resultado);
                        variable = (1,2,3,4);
                        variable = (5,6,7);
                    """;
        
        analizar(entrada);
        
    }
    
    public static void analizadores(String ruta, String jflexFile, String cupFile){
        try {
            String opcionesJflex[] =  {ruta+jflexFile,"-d",ruta};
            jflex.Main.generate(opcionesJflex);

            String opcionesCup[] =  {"-destdir", ruta,"-parser","Parser",ruta+cupFile};
            java_cup.Main.main(opcionesCup);
            
        } catch (Exception e) {
            System.out.println("No se ha podido generar los analizadores");
            System.out.println(e);
        }
    }
    
    // Realizar Analisis
    public static void analizar (String entrada){
        try {
            compi.Lexer lexer = new compi.Lexer(new StringReader(entrada)); 
            compi.Parser parser = new compi.Parser(lexer);
            parser.parse();
        } catch (Exception e) {
            System.out.println("Error fatal en compilación de entrada.");
            System.out.println(e);
        } 
    } 
    
}

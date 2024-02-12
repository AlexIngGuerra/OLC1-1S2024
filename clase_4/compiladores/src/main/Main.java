package main;

import java.io.StringReader;

public class Main {

    public static void main(String[] args) {
        // Generar Analizadores
        //analizadores("src/compi/", "Lexer.jflex", "Parser.cup");
        
        String entrada = """
                        println!("Hola");
                        println!(59+1+1);
                        println!(25+25+25+25);
                    """;
        /*
            59 + 1 + 1
            ENTERO MAS ENTERO + 1
            expresion MAS expresion + 1
            expresion (60) MAS ENTERO
            expresion(60) MAS expresion (1)
            expresion (61)
        */
        
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

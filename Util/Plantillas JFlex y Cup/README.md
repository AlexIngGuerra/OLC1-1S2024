
## Generador de Analizadores

```java
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
```

## Función Analizar

```java
    // Realizar Analisis
    public static void analizar (String entrada){
        try {
            analizador.Lexer lexer = new analizador.Lexer(new StringReader(entrada)); 
            analizador.Parser parser = new Parser(lexer);
            parser.parse();
        } catch (Exception e) {
            System.out.println("Error fatal en compilación de entrada.");
            System.out.println(e);
        } 
    } 
```


## Llamar Analizadores
```java
public static void main(String[] args) {
    String entrada = """
                    2,3,5,,|6,
                    7,8,9,,10
                    """;
    
    // Generar Analizadores
    analizadores("src/analizador/", "Lexer.jflex", "Parser.cup");
    // Analizar
    analizar(entrada);
}
```
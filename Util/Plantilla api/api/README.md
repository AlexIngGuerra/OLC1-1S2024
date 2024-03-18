# Plantilla API
## OLC1 - Sección N

## Iniciar el servidor

Comando para instalar todas las librerias y dependencias.

```
npm install
```

Comando para ejecutar con nodemon. (Permite reiniciar el servidor cada vez que se realice un cambio)

```
npm run dev
```

Comando para ejecutarlo en modo producción. (Solamente usando node)

```
npm start
```

## Otros comandos

### Generar analizador léxico y sintactico
Dentro de la carpeta analizador debe existir un archivo con el nombre "parser.jison". Este archivo debe contener la configuración de un analizador léxico y sintáctico funcional. Para generar el analizador como un archivo js ingrese el siguiente comando.

```
npm run parser
```

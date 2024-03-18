const app = require('./app/app.js');//Importamos la app

const PORT = 4000; //Definimos un puerto
app.listen(PORT);// Asignamos el puerto a la app e inicia la ejecución

console.log( `Server en: http://localhost:${PORT}` )//Mensajito para saber que funciona
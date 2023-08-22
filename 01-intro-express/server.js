// #1 Llamar a la biblioteca de express (importarla)
const express = require('express');

// #2 Crear una instancia de express
const app = express();
// #3 Configurar mi aplicación de express (app.use)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// #4 Crear o definir rutas de mi servidor
app.get('/', (request, response) => {
    response.send('Hola mundo');
});

// #5 Encender/levantar el servidor, por defecto usamos el puerto 3000
app.listen(3000, () => {
    console.log('Servidor encendido en el puerto 3000');
});
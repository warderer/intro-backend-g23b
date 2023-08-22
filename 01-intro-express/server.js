// #1 Llamar a la biblioteca de express (importarla)
const express = require('express');
const petsRouter = require('./api/v1/pets');

// #2 Crear una instancia de express
const app = express();
// #3 Configurar mi aplicación de express (app.use)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// #4 Crear o definir rutas de mi servidor
// Las rutas se deben crear siempre después de crear la instancia de express
// y antes de encender el servidor
app.get('/', (request, response) => {
    response.send('Hola mundo');
});

// #6 Importar rutas en otros archivos, con ayuda del router de express
app.use(petsRouter);

// #5 Encender/levantar el servidor, por defecto usamos el puerto 3000
app.listen(3000, () => {
    console.log('Servidor encendido en el puerto 3000');
});
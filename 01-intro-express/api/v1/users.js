const express = require('express');
const router = express.Router();

// POST
// El post tiene la habilidad de poder enviar un BODY
// Por defecto en express, no viene configurado para enviar el BODY
// Para eso necesitamos realizar una configuración:
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

router.post('/api/v1/users', (request, response) => {
    console.log(request.body)
    response.status(201).send(request.body);
})

module.exports = router;
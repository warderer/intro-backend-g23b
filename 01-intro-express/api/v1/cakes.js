const express = require('express');
const router = express.Router();

// Los códigos de estado y los verbos HTTP (get, post, put, etc.)
// Son una CONVECIÓN, no son una regla (no es una obligación).
// Cada desarrollador puede usar los que quiera.
// PERO NO ES RECOMENDABLE, ES UNA MALA PRÁCTICA.

// EJEMPLO DE MALA PRÁCTICA: Uso Patch en vez de Get, y uso 207 en vez de 200, así como 401 en vez de 200
router.patch('/api/v1/cakes/:cakeId', (request, response) => {
    const { cakeId } = request.params;
    if ( cakeId > 100) {
        response.status(401).send({ message: 'El Pastel esta Feo'});
        return;
    } else {
        const mensaje = { id: `El ID del pastel es: ${cakeId}`}
        response.status(207).send(mensaje);
        return;
    }
    response.send(cakeId);
});

module.exports = router;
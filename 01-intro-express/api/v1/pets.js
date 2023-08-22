const express = require('express');
// Router es un objeto que nos permite crear rutas
const router = express.Router();

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

/* QUERY */
// Query params: URL/api/v1/pets?age=3&type=dog
// Son similares a los params, pero se suelen enviar más de un dato.
// Las querys son abiertas, no definimos cuantas variables nos tienen que enviar, ni como se llaman. Nuestra responsabilidad es SOLO tomar en cuenta aquellos que nos interesen.
router.get('/api/v1/pets', (request, response) => {
    console.log('Query de pets', request.query);
    const { age, type } = request.query;

    if(!age && !type) {
        response.send(petList);
        return;
    }

    const filteredPets = petList.pets.filter(pet => {
        return pet.age == age || pet.type == type;
    });

    response.send(filteredPets);
    return;
});

/* PARAMS */
// Obtener parámetros de rutas dinámicas.
// Params 'URL/api/v1/pets/1'
// Los : en la ruta indican que es un valor dinámico (params)
router.get('/api/v1/pets/:petId', (request, response) => {
    console.log('Params de onePet', request.params);
    // response.send(`Solicitaste la pet con id: ${request.params.petId}`)
    onePet = petList.pets.find(pet => pet.id == request.params.petId);

    onePet
    ? response.status(200).send(onePet)
    : response.status(404).send({ message: 'Pet not found'});
});

module.exports = router;

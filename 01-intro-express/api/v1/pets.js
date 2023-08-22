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

router.get('/api/v1/pets', (request, response) => {
    response.send(petList);
});

router.get('/api/v1/pets/:petId', (request, response) => {
    console.log('Params de onePet', request.params);
    // response.send(`Solicitaste la pet con id: ${request.params.petId}`)
    onePet = petList.pets.find(pet => pet.id == request.params.petId);

    onePet
    ? response.status(200).send(onePet)
    : response.status(404).send({ message: 'Pet not found'});
});

module.exports = router;

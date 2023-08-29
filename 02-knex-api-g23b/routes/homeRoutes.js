const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es Homes, entonces ejecuta el controlador de Homes

router.get('/homes', homeController.createHome)

module.exports = router

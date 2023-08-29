// Dependiendo de la variable de Entorno del Sistema, va a usar la configuración adecuada de la base de datos

// Tomar la configuración del entorno de node y si no existe usamos development
const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile.js')
const knex = require('knex')

// Mandar a llamar la configuración de la base de datos
module.exports = knex(knexfile[env])

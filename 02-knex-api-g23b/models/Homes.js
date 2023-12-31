// El modelo trae los datos de la base de datos
// No se encarga de validar datos, ni resolver promesas, eso es trabajo del controlador en MVC

// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión de base de datos.
const knex = require('../config.js')

// Paso #2 Crear una función que me permita crear una casa (consulta a la base de datos)

const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar?
    .into('homes') // ¿De qué tabla?
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'fk_user', 'active', 'created_at']) // ¿Qué datos voy a retornar?
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where({ active: true }) // Traemos los campos que no le hayamos hecho un soft delete
}

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where({ house_id: houseId })
    .where({ active: true })
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // Información a actualizar
    .from('homes')
    .where({ house_id: houseId })
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

// Voy a borrar un registro de manera real en la base de datos
const destroy = (houseId) => {
  return knex
    .del() // delete
    .from('homes')
    .where({ house_id: houseId })
}

// Borrado lógico, solo cambio el estado de active de true a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false }) // Información a actualizar
    .from('homes')
    .where({ house_id: houseId })
}

// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador.

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}

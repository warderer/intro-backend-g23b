/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('homes').then(function (exists) {
        if (!exists) {
          /* Si la tabla no existe, voy a crear una nueva tabla */
          return knex.schema.createTable('homes', function (table) {
            // sintaxis: table.tipoDeDato("nombreAtributo").chainableMethods
            table.increments('house_id').primary()// en knex usamos increments en vez de serial como tipo de dato
            table.string('title').notNullable() // notNullable es que no puede quedar nulo (not null)
            table.text('description')
            table.integer('guest')
            table.text('address')
            table.decimal('rental_price', 8, 2)
            table.boolean('active').notNullable().defaultTo(true) // defaultTo: Especifico un valor por defecto
            table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() me devuelve la fecha y hora actual al momento se crear el registro en la base de datos.
          })
        }
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.dropTable("homes");
        }
    })
};

/* *** GUIA DE USO RÁPIDO DE KNEX */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombreDeLaMigracion
// Esto crea una carpeta llamada migrations, y coloca dentro el historial de migraciones como archivos js, incluyendo el que acabamos de crear.

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.UP **
// Al ejecutar una migración sobre exports.up estamos creando o modificando la tabla en la base de datos.
// Ejecutar la última migración (up): knex migrate:latest
// Ejecutar todas las migraciones (up): knex migrate:up
// Ejecutar una migración específica (up): knex migrate:up 20230824012834_home.js

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.DOWN **
// Al ejecutar una migración sobre exports.down estamos eliminando o modificando la tabla en la base de datos (deshacemos el cambio de exports.up).
// Deshacer la última migración (down): knex migrate:rollback latest
// Deshacer todas las migraciones (down): knex migrate:rollback
// Deshacer una migración específica (down): knex migrate:down 20230824012834_home.js
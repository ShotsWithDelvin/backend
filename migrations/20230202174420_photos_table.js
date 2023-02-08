exports.up = function(knex) {
    return knex.schema.createTable('photos', table => {
        table.increments('photos_id').primary();
        table.string('url').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('photos')
};







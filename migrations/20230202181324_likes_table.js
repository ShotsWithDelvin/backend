exports.up = function(knex) {
    return knex.schema.createTable('likes', table => {
        table.increments('likes_id').primary();
        table.integer('users_id').notNullable();
        table.integer('photos_id').notNullable();
        table.foreign('users_id').references('users_id').inTable('users');
        table.foreign('photos_id').references('photos_id').inTable('photos');
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('likes')
};










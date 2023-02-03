exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('comments_id').primary();
        table.string('commentary').notNullable();
        table.integer('photos_id').notNullable();
        table.foreign('photos_id').references('photos_id').inTable('photos');
        table.integer('users_id').notNullable();
        table.foreign('users_id').references('users_id').inTable('users');
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};


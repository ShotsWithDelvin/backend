exports.up = function(knex) {
    return knex.schema.createTable("users", table =>{
        table.increments('users_id').primary();
        table.string("name").notNullable();
        table.string("username").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
};




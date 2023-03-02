// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'photographySite',
      user:     'postgres',
      password: ''
    },
  },
  production: {
    client: 'pg',
    connection: 'postgresql://postgres:U0xKeXnd7bVP7bNBI7m8@containers-us-west-190.railway.app:6079/railway'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

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
    connection: 'postgresql://postgres:iJdaPMDW6YuxggTSrDdJ@containers-us-west-132.railway.app:7924/railway'
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

const { Pool } = require("pg");

const pool = new Pool({
  database: "photographySite",
  user: "postgres",
  password: "",
});

module.exports = {
  pool,
};
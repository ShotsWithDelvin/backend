const { Pool } = require("pg");



const connectionString = "postgresql://postgres:iJdaPMDW6YuxggTSrDdJ@containers-us-west-132.railway.app:7924/railway"
const pool = new Pool({
  connectionString,
  database: "photographySite",
  user: "postgres",
  password: "",
});



module.exports = {
  pool,
};
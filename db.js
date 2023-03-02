const { Pool } = require("pg");



const connectionString = "postgresql://postgres:U0xKeXnd7bVP7bNBI7m8@containers-us-west-190.railway.app:6079/railway"
const pool = new Pool({
  
  database: "photographySite",
  user: "postgres",
  password: "",
});

// connectionString,

module.exports = {
  pool,
};
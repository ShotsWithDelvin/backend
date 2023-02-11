const { pool } = require("../db.js");

class User {
  static async totalUsers() {
    const database = "SELECT * FROM users";
    const databaseResults = await pool.query(database);
    return databaseResults.rows;
  }

  static async singleUser(id) {
    const query = await pool.query("SELECT id, username, email FROM users WHERE id = $1", [id])
    return query.rows[0]
  }

  static async loginUser(username) {
    let query = await pool.query(
      "SELECT * FROM users WHERE username = $1;", 
      [username]
    )
    return query.rows[0]
    // const database = "SELECT * FROM users WHERE username = $1";
    // const photographyResults = await pool.query(database, [username]);
    // return photographyResults.rows[0];
  }

  static async createUser({name, username, email, password}) {
    let query = await pool.query(
      "INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4);", 
      [name, username, email, password]
    )
  
    console.log("hi there")

    return query.rows[0];
  }

  static async getUserByUsername(username){
    let query = await pool.query("SELECT * FROM users WHERE username = $1;", [username])
    return query.rows[0]

  } 

  // static async deleteUser(id) {
  //   const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
  //     id,
  //   ]);
  //   return deleteUser.rows[0];
  // }
}

module.exports = User;
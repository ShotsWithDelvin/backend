const { pool } = require("../db.js");

class User {
  static async totalUsers() {
    const database = "SELECT * FROM users";
    const databaseResults = await pool.query(database);
    return databaseResults.rows;
  }

  static async singleUser(id) {
    const database = "SELECT * FROM users WHERE id = $1";
    const photographydb = "SELECT * FROM photos WHERE user_id = $1";
    const photographydb2 = await pool.query(photographydb, [id]);
    const photographyResults = await pool.query(database, [id]);
    return { ...photographydb2.rows[0], ...photographyResults.rows[0] };
  }

  static async getByEmail(email) {
    const database = "SELECT * FROM users WHERE email = $1";
    const photographyResults = await pool.query(database, [email]);
    return photographyResults.rows[0];
  }

  static async createUser(info) {
    const query =
      "INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4) RETURNING*";
    const photographyResults = await pool.query(query, [
      info.name,
      info.username,
      info.email,
      info.password,
    ]);
    console.log("hi there")
    console.log(info)

    return photographyResults.rows[0];
  }

  static async updateUser({
    id,
    name,
  }) {
    const photographyQuery1 =
      "UPDATE users SET name = $1, WHERE id = $2 RETURNING*";
    const photographyQuery2 =
      "UPDATE photos SET commentary = $1, photos_id = $2 WHERE users_id = $3 RETURNING*";
    await pool
      .query(photographyQuery1, [name, id])
      .then((results) => results.rows[0]);
    return await pool.query(photographyQuery2, [
      commentary,
      photo_id,
      id,
    ]);
  }

  static async deleteUser(id) {
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);
    return deleteUser.rows[0];
  }
}

module.exports = User;
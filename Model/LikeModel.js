const { pool } = require("../db.js");

class Likes {
  static async totalLikes() {
    const database = "SELECT * FROM likes";
    const databaseResults = await pool.query(database);
    return databaseResults.rows;
  }

  static async singleLike(id) {
    const query = await pool.query("SELECT id, users_id, photos_id FROM likes WHERE id = $1", [id])
    return query.rows[0]
    // const database = "SELECT * FROM likes WHERE id = $1";
    // const photographydb = "SELECT * FROM photos WHERE likes_id = $1";
    // const photographydb2 = await pool.query(photographydb, [id]);
    // const photographyResults = await pool.query(database, [id]);
    // return { ...photographydb2.rows[0], ...photographyResults.rows[0] };
  }

  static async deleteLikes(id) {
    const unlike = await pool.query("DELETE FROM likes WHERE id = $1", [id]);
    return unlike.rows[0];
  }
}

module.exports = Likes;

const { pool } = require("../db.js");

class Photos {
  static async totalPhotos() {
    const database = 'SELECT * FROM photos ORDER BY photos_id DESC'
    
    const databaseResults = await pool.query(database);
    return databaseResults.rows; 
  } 

  static async singlePhoto(id) {
    const database = "SELECT * FROM photos where id = $1";
    const photographydb = "SELECT * FROM comments WHERE photos_id = $1";
    const photographydb2 = await pool.query(photographydb, [id]);
    const photographyResults = await pool.query(database, [id]);
    return { ...photographydb2.rows[0], ...photographyResults.rows[0] };
  }
  static async createPhotos(info) {
    const query =
      "INSERT INTO photos (photos_id, url) VALUES ($1, $2) RETURNING *";
    const photographyResults = await pool.query(query, [
      info.photos_id,
      info.url,
    ]); 
    return photographyResults.rows
    
  }
}

module.exports = Photos;
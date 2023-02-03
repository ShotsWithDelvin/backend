const { pool } = require("../db.js");

class Comments {
  static async getAllComments(id) {
    const database = "SELECT * FROM comments WHERE post_id = $1";
    const PhotographyResults = await pool.query(database, [id]);
    return PhotographyResults.rows;
  }

  static async addComment({commentary, photos_id, users_id}) {
    const query = "INSERT INTO comments (commentary, photos_id, users_id) VALUES ($1, $2, $3) RETURNING *";
    const photographyResults = await pool.query(query, [commentary, photos_id, users_id]);  
    
    return { ...photographyResults.rows[0]};
  }
}

module.exports = Comments;
const { pool } = require("../db.js");

class Comments {
  static async getAllComments(id) {
    const database = 'SELECT comments.id, commentary, photos_id, users_id, "name", username, email FROM comments JOIN users ON "comments".users_id = users.id WHERE photos_id = $1;';
    const PhotographyResults = await pool.query(database, [id]);
    return PhotographyResults.rows;
  }

  static async getSingleComment(id, users_id) {
    const database = 'SELECT * FROM comments JOIN users ON "comments".users_id = $1 WHERE comments.id = $2;';
    const PhotographyResults = await pool.query(database, [users_id, id]);
    return PhotographyResults.rows[0];
  }

  static async addComment({commentary, photos_id, users_id}) {
    const query = "INSERT INTO comments (commentary, photos_id, users_id) VALUES ($1, $2, $3) RETURNING *;";
    const photographyResults = await pool.query(query, [commentary, photos_id, users_id]);  
    
    return { ...photographyResults.rows[0]};
  }

  static async deleteComment(id) {
    const database = 'DELETE FROM comments WHERE id = $1;';
    const PhotographyResults = await pool.query(database, [id]);
    return PhotographyResults.rows[0];
  }
}

module.exports = Comments;
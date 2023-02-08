const Comments = require("../model/CommentModel");

const allComments = async (req, res) => {
  const comments = await Comments.getAllComments(req.params.id);
  res.status(200).send(comments);
};

const addComment = async (req, res) => {
  const {
    commentary,
    photos_id,
    users_id
    
  } = req.body;
  const comments = await Comments.addComment({
    photos_id,
    users_id,
    commentary
  });

  if (comments) {
    res.status(200).send(comments);
    
  } else {
    res.status(404).send("comment not found");
  }
};

module.exports = {
  allComments,
  addComment,
};
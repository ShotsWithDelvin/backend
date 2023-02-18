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

  const fullComment = await Comments.getSingleComment(comments.id, users_id);

  if (fullComment) {
    res.status(200).send(fullComment);
  } else {
    res.status(404).send("comment not found");
  }
};

const deleteComment = async (req, res) => {
  const comment = await Comments.deleteComment(req.body.id);
  const allComments = await Comments.getAllComments(req.body.photos_id)
  res.status(200).send(allComments);
}

module.exports = {
  allComments,
  addComment,
  deleteComment,
};
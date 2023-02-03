const express = require("express");

const likeControllers = require("../controller/LikesControllers");
const authenticate = require("../auth");

const router = express.Router();

router.get("/:id", likeControllers.getAllLikes);

router.post("/likes", likeControllers.getLikes);

module.exports = router;
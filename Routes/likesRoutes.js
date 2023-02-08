const express = require("express");

const likeControllers = require("../controller/LikesControllers");
const authenticate = require("../auth");

const router = express.Router();

router.get("/", likeControllers.getAllLikes);

router.post("/:id", likeControllers.getLikes);

module.exports = router;
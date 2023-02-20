const express = require("express");
const router = express.Router();
const userController = require("../controller/UserControllers");
const authenticate = require("../auth");


router.get("/", userController.allUsers);
router.get("/logout", userController.logout);
router.get("/:id", userController.getUserById);

// router.get("/getUser", authenticate, userController.getUserByUsername);
router.post("/signup", userController.userSignUp);
router.post("/login", userController.login);

router.all("*", (req, res) => {
  res.send("This user route does not exist");
});

module.exports = router;
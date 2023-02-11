
const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const databasePool = require("../db");

const allUsers = async (req, res) => {
  const userId = req.id;
  const users = await Users.totalUsers(userId);
  res.status(200).send(users);
};

const getUserById = async (req, res) => {
  const userId = req.id;
  const user = await Users.singleUser(userId);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("user not found");
  }
};

const validateInputs = (email, password) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email.toLowerCase())) return false;
  if (password.length < 5) return false;
  return true;
};

const userSignUp = async (req, res) => {
  try {
    const {
      email,
      password,
      name,
      username
    } = req.body;

    const saltRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUserInfo = {
      name,
      username,
      email,
      password: hashedPassword,
    };
    console.log(newUserInfo);
    await Users.createUser(newUserInfo);
    const token = await jwt.sign({ username: username }, process.env.REACT_APP_AUTH_KEY);
    res.cookie("token", token).sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res) => {
  try {
    let {username, password} = req.body
    const foundUser = await Users.loginUser(username)
    console.log(foundUser)
    const isValidPassword = await bcrypt.compare(password, foundUser.password);
  
    if (isValidPassword) {
      const token = jwt.sign({ username: foundUser.username }, process.env.REACT_APP_AUTH_KEY);
      res.cookie("token", token).status(200).send(JSON.stringify(foundUser));
    }
  } catch (e) {
    res.status(401).send("invalid username or password")
  }   
};

const logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};

const userDelete = async (req, res) => {
  const userId = req.id;
  const user = await Users.deleteUser(userId);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Deletion Unsuccessful");
  }
};

const userUpdate = async (req, res) => {
  const userId = req.id;
  const { name, username, email, password } = req.body;

  const user = await Users.updateUser({
    id: userId,
    name,
    username,
    email,
    password,
  });

  if (user) {
    res.status(200).send("Information successfully updated");
  } else {
    res.status(404).send();
  }
};

module.exports = {
  allUsers,
  login,
  logout,
  getUserById,
  userSignUp,
  userDelete,
  userUpdate,
};
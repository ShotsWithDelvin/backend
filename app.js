const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const userRouter = require("./Routes/userRoutes.js");
const photosRouter = require("./Routes/photosRoutes.js");
const likesRouter = require("./Routes/likesRoutes")

const commentsRouter = require("./Routes/commentsRoutes");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/users", userRouter);
app.use("/likes", likesRouter);
app.use("/photos", photosRouter)
app.use("/comments", commentsRouter);

app.listen(PORT, () => {
  console.log(`disposing listening on port ${PORT}`);
});
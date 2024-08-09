const express = require("express");
const app = express();
const path = require("node:path");
const dotenv = require("dotenv");

dotenv.config();

const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => console.log("Listening on port 3000."));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

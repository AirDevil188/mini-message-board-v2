const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexController");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

app.listen(PORT, () => console.log("Listening on port 3000."));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

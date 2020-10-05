const path = require("path");
const fs = require("fs").promises;
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
  return res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  return fs.readFile(path.join(__dirname, "budget.json"), "utf-8").then((budget) => {
    return res.contentType("application/json").send(budget);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

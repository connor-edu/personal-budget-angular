const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

const budget = [
  { title: "Eat out", budget: 25 },
  { title: "Rent", budget: 375 },
  { title: "Groceries", budget: 110 },
];

app.get("/hello", (req, res) => {
  return res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  return res.json(budget);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

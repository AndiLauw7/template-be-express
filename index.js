const express = require("express");
const app = express(express);
require("dotenv").config;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});

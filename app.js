const express = require("express");
const App = express();

App.get("/", (req, res) => {
  res.send(`<h1> Welcome </h1>`);
});

App.listen(3000, () => console.log("server on port 3000"));

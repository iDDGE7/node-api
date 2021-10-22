const express = require("express");
const App = express();

App.get("/", (req, res) => {
  res.send(`<h1> Welcome </h1>`);
});

const port = process.env.PORT || 3000;
App.listen(port, () => console.log("server on port 3000"));

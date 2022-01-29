"use strict";

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "localhost";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/ping", (req, res) => {
  res.status(200).send("Pong");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

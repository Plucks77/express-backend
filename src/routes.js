const express = require("express");
const usuarioController = require("./controllers/usuarioController");

const routes = express.Router();

routes.get("/", function(req, res) {
  res.send("Oi cara");
});

routes.post("/criar", usuarioController.sotre);
routes.post("/login", usuarioController.login);

module.exports = routes;

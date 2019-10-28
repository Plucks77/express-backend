const express = require("express");
const usuarioController = require("./controllers/usuarioController");
const eventoController = require("./controllers/eventoController");

const middlawareAuth = require("./middlewares/auth");

const routes = express.Router();

routes.post("/usuario/cadastrar", usuarioController.cadastrar);
routes.post("/login", usuarioController.login);

routes.use(middlawareAuth).post("/evento/criar", eventoController.criar);

module.exports = routes;

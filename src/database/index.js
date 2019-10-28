const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const usuario = require("../models/usuario");
const evento = require("../models/evento");

const connection = new Sequelize(dbconfig);

usuario.init(connection);
evento.init(connection);

module.exports = connection;

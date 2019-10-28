const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const user = require("../models/usuario");

const connection = new Sequelize(dbconfig);

user.init(connection);

module.exports = connection;

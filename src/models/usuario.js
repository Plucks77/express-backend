const { Model, DataTypes } = require("sequelize");

class usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        cpf: DataTypes.STRING,
        nick: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "usuario"
      }
    );
  }
}

module.exports = usuario;

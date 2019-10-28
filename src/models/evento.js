const { Model, DataTypes } = require("sequelize");

class evento extends Model {
  static init(sequelize) {
    super.init(
      {
        id_criador: DataTypes.NUMBER,
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        data_e_hora: DataTypes.DATE,
        local: DataTypes.STRING,
        privado: DataTypes.BOOLEAN,
        valor: DataTypes.FLOAT,
        max_participantes: DataTypes.INTEGER
      },
      {
        sequelize,
        tableName: "evento"
      }
    );
  }
}

module.exports = evento;

const usuario = require("../models/usuario");

module.exports = {
  async sotre(req, res) {
    const { nome, email, senha, data_nascimento, cpf, nick } = req.body;

    const user = await usuario.create({
      nome,
      email,
      senha,
      data_nascimento,
      cpf,
      nick
    });

    return res.json(user);
  },

  async login(req, res) {
    const { email, senha } = req.body;

    const user = await usuario.findOne({
      where: {
        email,
        senha
      }
    });

    if (!user) {
      return res.status(401).json({ erro: "Usuário não encontrado!" });
    }

    return res.json({ user_id: user.id });
  }
};

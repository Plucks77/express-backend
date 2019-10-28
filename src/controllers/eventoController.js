const evento = require("../models/evento");

module.exports = {
  async criar(req, res) {
    const {
      id_criador,
      nome,
      descricao,
      data_e_hora,
      local,
      privado,
      valor,
      max_participantes
    } = req.body;

    try {
      await evento.create({
        id_criador,
        nome,
        descricao,
        data_e_hora,
        local,
        privado,
        valor,
        max_participantes
      });

      return res.json({ mensagem: "Evento criado com sucesso!" });
    } catch (erro) {
      return res.status(400).json({ erro: erro });
    }
  }
};

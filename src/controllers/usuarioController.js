const usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

function generateToken(params) {
  return jwt.sign(params, auth.secret, {
    expiresIn: 86400
  });
}

module.exports = {
  async cadastrar(req, res) {
    const { nome, email, senha, data_nascimento, cpf, nick } = req.body;

    const user = await usuario.create({
      nome,
      email,
      senha,
      data_nascimento,
      cpf,
      nick
    });

    return res.json({
      user_id: user.id,
      token: generateToken({ id: user.id })
    });
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

    return res.json({
      user_id: user.id,
      token: generateToken({ id: user.id })
    });
  },

  async infos(req, res){

    const id = req.params.id;    

    const user = await usuario.findByPk(id);

    if(!user)
    {
      return res.status(401).json({ erro: "Não existe um usuário com o id "+ id+" ." });
    }

    return res.json({
      nome: user.nome,
      email: user.email,
      data_nascimento: user.data_nascimento,
      cpf: user.cpf,
      nick: user.nick      
    })
  }
};

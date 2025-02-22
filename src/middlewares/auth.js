const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: "Token não enviado" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).json({ erro: "Token errado" });
  }

  const [scheme, token] = parts;

  //   if (!/^Bearer$^/i.test(scheme)) {
  //     return res.status(401).json({ erro: "Token malformatado" });
  //   }

  jwt.verify(token, auth.secret, (erro, decoded) => {
    if (erro) {
      return res.status(401).json({ erro: "Token invalido" });
    }

    return next();
  });
};

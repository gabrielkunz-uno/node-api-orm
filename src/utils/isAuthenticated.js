require('dotenv/config');

export const isAuthenticated = async (req, res, next) => {
  if (!req.query.senha) {
    return res.status(401).send({
      message: 'Informe uma senha na query da URL para autenticar'
    })
  } else {
    const senha = 'mu1t0f4c1l';
    if (req.query.senha == senha) {
      return next();
    }
    return res.status(401).send({
      message: 'A senha é inválida'
    })
  }
};

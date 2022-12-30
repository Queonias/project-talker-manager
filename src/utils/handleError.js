module.exports = (res, e) => res
      .status(500)
      .send({ message: `Algo deu errado! Mensagem: ${e.message}` });
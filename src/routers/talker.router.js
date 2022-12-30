const express = require('express');
const { readTalker, writeTalker } = require('../utils/fsUtils');
const {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
} = require('../middlewares/authTalker');

const router = express.Router();

router.get('/talker', async (req, res) => {
  const talkers = await readTalker();
  res.status(200).json(talkers);
});

router.get('/talker/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const talker = await readTalker();
    const person = talker.find((p) => p.id === id);
    if (person !== undefined) {
      return res.status(200).json(person);
    }
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  } catch (e) {
    return res
      .status(500)
      .send({ message: `Algo deu errado! Mensagem: ${e.message}` });
  }
});

router.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    try {
      const talker = await readTalker();
      const id = talker.length + 1;
      const person = req.body;
      const personWithId = { id, ...person };
      await writeTalker(personWithId);
      res.status(201).json(personWithId);
    } catch (e) {
      res
        .status(500)
        .send({ message: `Algo deu errado! Mensagem: ${e.message}` });
    }
  },
);

module.exports = router;

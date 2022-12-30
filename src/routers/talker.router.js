const express = require('express');
const { readTalker } = require('../utils/fsUtils');

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
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } catch (e) {
    return res.status(500).send({ message: `Algo deu errado! Mensagem: ${e.message}` });
  }
});

module.exports = router;

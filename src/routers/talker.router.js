const express = require('express');
const { readTalker, writeTalker, editeTalker, deleteTalker } = require('../utils/fsUtils');
const handleError = require('../utils/handleError');
const validations = require('../middlewares/authTalker');

const [validateToken] = validations;

const router = express.Router();

router.get('/talker', async (_req, res) => {
  console.log('talker');
  const talkers = await readTalker();
  res.status(200).json(talkers);
});

router.get('/talker/search', validateToken, async (req, res) => {
  try {
    const searchTerm = req.query.q;
    console.log(searchTerm, 'searchTerm');
    const talker = await readTalker();
    if (!searchTerm) {
      return res.status(200).json(talker);
    }
    const people = talker.filter((p) => p.name.includes(searchTerm));
    return res.status(200).json(people);
  } catch (e) {
    handleError(res, e);
  }
});

router.get('/talker/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const talker = await readTalker();
    const person = talker.find((p) => p.id === id);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
  } catch (e) {
    handleError(res, e);
  }
});

router.post('/talker', ...validations, async (req, res) => {
    try {
      const talker = await readTalker();
      const id = talker.length + 1;
      const person = req.body;
      const personWithId = { id, ...person };
      await writeTalker(personWithId);
      res.status(201).json(personWithId);
    } catch (e) {
      handleError(res, e);
    }
  });

  router.put('/talker/:id', ...validations, async (req, res) => {
    try {
      const id = Number(req.params.id);
      const person = req.body;
      await editeTalker(id, person);
      return res.status(200).json({ id, ...person });
    } catch (e) {
      handleError(res, e);
    }
  });

  router.delete('/talker/:id', validateToken, async (req, res) => {
    try {
      const { id } = Number(req.params.id);
      await deleteTalker(id);
      return res.sendStatus(204);
    } catch (e) {
      handleError(res, e);
    }
  });

module.exports = router;

const express = require('express');
const { readTalker } = require('../utils/fsUtils');

const router = express.Router();

router.get('/talker', async (req, res) => {
    const talkers = await readTalker();
    res.status(200).json(talkers);
});

module.exports = router;
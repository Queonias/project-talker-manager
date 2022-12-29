const express = require('express');
const talkerRouter = require('./talker.router');

const router = express.Router();

router.use(talkerRouter);

module.exports = router;
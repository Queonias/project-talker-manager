const express = require('express');
const generateToken = require('../utils/generateToken');
const { validateEmail, validatePassword } = require('../middlewares/authLogin');

const router = express.Router();

router.post('/login', validateEmail, validatePassword, (__req, res) => {
    res.status(200).json({ token: generateToken() });
});

module.exports = router;
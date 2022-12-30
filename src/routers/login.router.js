const express = require('express');
const generateToken = require('../utils/generateToken');
const { validateEmail, validatePassword } = require('../middlewares/authLogin');

const router = express.Router();

router.post('/login', validateEmail, validatePassword, (__req, res) => {
    try {
        return res.status(200).json({ token: generateToken() });   
    } catch (e) {
        return res.status(500).send({ message: `Algo deu errado! Mensagem: ${e.message}` });
    }
});

module.exports = router;
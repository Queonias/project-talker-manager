const regexPart1 = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))';
const regexPart2 = '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|';
const regexPart3 = '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
const emailRegex = new RegExp(`${regexPart1}${regexPart2}${regexPart3}`);

const validateEmail = (req, res, next) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

    if (password.length < 6) { 
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
    }

    next();
};

module.exports = {
    validateEmail,
    validatePassword,
};
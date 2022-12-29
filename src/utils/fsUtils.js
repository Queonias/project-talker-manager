const fs = require('fs/promises');
const { join } = require('path');

const readTalker = async () => {
    try {
        const data = await fs.readFile(join(__dirname, '..', 'talker.json'));
        const talker = JSON.parse(data);
        return talker;   
    } catch (error) {
        throw new Error(`Erro na leitura do arquivo ${error.message}`);
    }
};

module.exports = {
    readTalker,
};

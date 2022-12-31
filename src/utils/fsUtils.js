const fs = require('fs/promises');
const { join } = require('path');

const PATH = join(__dirname, '..', 'talker.json');

const readTalker = async () => {
    try {
        const data = await fs.readFile(PATH);
        const talker = JSON.parse(data);
        return talker;   
    } catch (error) {
        throw new Error(`Erro na leitura do arquivo ${error.message}`);
    }
};

const writeTalker = async (person) => {
    try {
        const talker = await readTalker();
        talker.push(person);
        await fs.writeFile(PATH, JSON.stringify(talker, null, 2)); 
    } catch (error) {
        throw new Error(`Não foi possível editar o arquivo: ${error.message}`);
    }
};

const editeTalker = async (id, person) => {
    try {
        const talker = await readTalker();
        const index = talker.findIndex((p) => p.id === id);
        talker.splice(index, 1, { id, ...person });
        await fs.writeFile(PATH, JSON.stringify(talker, null, 2)); 
    } catch (error) {
        throw new Error(`Não foi possível atualizar o arquivo: ${error.message}`);
    }
};

const deleteTalker = async (id) => {
    try {
        const talker = await readTalker();
        const index = talker.findIndex((p) => p.id === id);
        talker.splice(index, 1);
        await fs.writeFile(PATH, JSON.stringify(talker, null, 2));
    } catch (error) {
        throw new Error(`Não foi possível deletar o arquivo: ${error.message}`);
    }
};

module.exports = {
    readTalker,
    writeTalker,
    editeTalker,
    deleteTalker,
};

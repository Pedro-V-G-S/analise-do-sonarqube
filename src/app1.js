const userModel = require('../models/UserModel');

// Função para listar usuários
const listUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para obter um usuário por ID
const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(parseInt(req.params.id));
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para criar um usuário
const createUser = async (req, res) => {
    try {
        const newUser = await userModel.createUser(req.body);
        res.status(201).json(newUser);

        // Problema artificial: variável não utilizada
        const unusedVariable = "I am unused";
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para atualizar um usuário
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.updateUser(parseInt(req.params.id), req.body);
        res.status(200).json(updatedUser);

        // Problema artificial: código duplicado
        console.log('Updating user...');
        console.log('Updating user...');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para deletar um usuário
const deleteUser = async (req, res) => {
    try {
        await userModel.deleteUser(parseInt(req.params.id));
        res.status(204).send();

        // Problema artificial: retorno de função sem uso
        return "This return is useless";
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Problema artificial: função nunca usada
const unusedFunction = () => {
    console.log("I am never called");
};

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser };

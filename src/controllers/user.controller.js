const {hashingPassword, passwordChecking} = require('../helpers/passwordHashing');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    
    try {

        const user = req.body;
        const userWithPassHash = await hashingPassword(user);
        const userCreated = await createUserService(userWithPassHash);

        res.status(201).json({message:"User creado con exito", user: userCreated});
    } catch (error) {
        res.status(500).json({message:"Error al crear usuario", error: error.message});
    }
}

module.exports = { createUser };
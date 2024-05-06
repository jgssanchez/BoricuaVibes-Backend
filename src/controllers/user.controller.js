const {hashingPassword, passwordChecking} = require('../helpers/passwordHashing');
const { getUserService, createUserService, getByEmailService } = require('../services/user.services');
const sendToken = require('../helpers/jwtToken');

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const userWithPassHash = await hashingPassword(user);
        const userCreated = await createUserService(userWithPassHash);
        res.status(201).json({message:"Usuario creado con exito", user: userCreated});
    } catch (error) {
        res.status(500).json({message:"Error al crear usuario", error: error.message});
    }
}

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getByEmailService(email);

    if (!user) return res.status(400).json({message:"El usuario no esta registrado", error: error.message});

    const passMatch = await passwordChecking(password, user.password);

    if (!passMatch) return res.status(400).json({message:"La contraseña ingresada no es valida", error: error.message});

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(400).json({message:"Error al loguearse", error: error.message});
  }
};

const getUser = async (req, res, next) => {
    try {
      const user = await getUserService(req.user.id);
  
      if (!user) {
        return res.status(400).json({message:"El usuario no existe", error: error.message});
      }
      
      res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({message:"Error al obtener el usuario", error: error.message});
    }
  };



module.exports = { createUser, getUser, loginUser};
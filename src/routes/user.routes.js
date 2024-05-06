const {Router} = require('express');
const { createUser,loginUser } = require('../controllers/user.controller');
const route = Router();

route.post('/create', createUser); 
route.post('/login', loginUser);

module.exports = route;

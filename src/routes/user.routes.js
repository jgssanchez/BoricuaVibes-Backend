const {Router} = require('express');
const { createUser } = require('../controllers/user.controller');
const route = Router();

route.post('/create', createUser);

module.exports = route;

const User = require("../models/user.model");

const createUserService = async (user) => {
    
    const newUser = new User(user);
    await newUser.save();
    return newUser;
}
module.exports = { createUserService }
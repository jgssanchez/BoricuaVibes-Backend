const bcrypt = require("bcrypt");

const hashingPassword = async (user) => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);
  return user;
};

const passwordChecking = async (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};
module.exports = { hashingPassword, passwordChecking };

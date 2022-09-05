const { User } = require("../models");
const Sequelize = require("sequelize");

const addUser = async (req, res) => {
  try {
    let newUserInfo = {
      ...req.body,
    };
    console.log(newUserInfo);
    const newUser = await User.create(newUserInfo);
    res.status(200).json(newUser);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
};

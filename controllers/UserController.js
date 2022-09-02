const { User } = require("../models");
const Sequelize = require("sequelize");

const showAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  showAllUsers,
};

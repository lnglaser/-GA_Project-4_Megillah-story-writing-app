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

const showUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const selectedUser = await User.findByPk(userId);
    res.status(200).json(selectedUser);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  showAllUsers,
  showUserById,
};

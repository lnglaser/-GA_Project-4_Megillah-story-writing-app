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

const showUserByName = async (req, res) => {
  try {
    let userName = req.body.query;
    let results = await User.findAll({
      where: { userName: { [Sequelize.Op.iLike]: `%${userName}%` } },
    });
    res.status(200).json(results);
  } catch (error) {
    throw error;
  }
};

const addUser = async (req, res) => {
  try {
    let newUserInfo = {
      ...req.body,
    };
    const newUser = await User.create(newUserInfo);
    res.status(200).json(newUser);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  showAllUsers,
  showUserById,
  showUserByName,
};

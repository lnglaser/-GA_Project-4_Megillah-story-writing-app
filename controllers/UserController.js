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

const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);

    let userToUpdate = await User.update(req.body, {
      where: { id: userId },
      returning: true,
    });
    res.status(200).json(userToUpdate);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const userToDelete = await User.findByPk(userId);
    let message = Object.assign({}, userToDelete);
    await User.destroy({ where: { id: userId } });
    res.status(200).json({
      alert: `Deleted user with an ID of ${userId}`,
      destroyed: message,
    });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  showAllUsers,
  showUserById,
  showUserByName,
  updateUser,
  deleteUser,
};

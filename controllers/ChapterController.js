const { Chapter, Scroll, User } = require("../models");
const Sequelize = require("sequelize");

const showAllChapters = async (req, res) => {
  try {
    const allChapters = await Chapter.findAll();
    res.status(200).json(allChapters);
    console.log("Display all chapters");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  showAllChapters,
};

const { Scroll, User } = require("../models");
const Sequelize = require("sequelize");

const showAllScrolls = async (req, res) => {
  try {
    const allScrolls = await Scroll.findAll();
    res.status(200).json(allScrolls);
    console.log("Display all scrolls");
  } catch (error) {
    throw error;
  }
};

const showScrollById = async (req, res) => {
  try {
    const scrollId = parseInt(req.params.scroll_id);
    const selectedScroll = await Scroll.findByPk(scrollId);
    res.status(200).json(selectedScroll);
  } catch (error) {
    throw error;
  }
};

const searchForScroll = async (req, res) => {
  try {
    let searchQuery = parseInt(req.body.query);
    let results = await Scroll.findAll({
      where: {
        [Sequelize.Op.or]: [
          { title: { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
          { body: { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
        ],
      },
    });
    res.status(200).json(results);
  } catch (error) {
    throw error;
  }
};

const addNewScroll = async (req, res) => {
  try {
    const userId = req.params.user_id;
    console.log(userId);
    let newScrollInfo = {
      userId: userId,
      title: req.body.title,
      body: req.body.body,
    };
    console.log(newScrollInfo);

    const newScroll = await Scroll.create(newScrollInfo);

    res.status(200).json(newScroll);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  showAllScrolls,
  showScrollById,
  searchForScroll,
  addNewScroll,
};

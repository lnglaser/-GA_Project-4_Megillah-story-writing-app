const { Scroll } = require("../models");
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

module.exports = {
  showAllScrolls,
};

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

const showChapterById = async (req, res) => {
  try {
    const chapterId = parseInt(req.params.chapter_id);
    const selectedChapter = await Chapter.findByPk(chapterId);
    res.status(200).json(selectedChapter);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  showAllChapters,
  showChapterById,
};

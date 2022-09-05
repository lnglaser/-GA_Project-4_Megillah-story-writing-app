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

const showChaptersByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const allUserChapters = await Chapter.findAll({
      where: { userId: userId },
    });
    res.status(200).json(allUserChapters);
  } catch (error) {
    throw error;
  }
};

const searchForChapter = async (req, res) => {
  try {
    let searchQuery = req.body.query;
    let results = await Chapter.findAll({
      where: { body: { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
    });
    res.status(200).json(results);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  showAllChapters,
  showChapterById,
  showChaptersByUserId,
  searchForChapter,
};

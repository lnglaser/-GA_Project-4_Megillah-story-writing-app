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

const showChaptersByScrollId = async (req, res) => {
  try {
    const scrollId = parseInt(req.params.scroll_id);
    const allScrollChapters = await Chapter.findAll({
      where: { scrollId: scrollId },
    });
    console.log(allScrollChapters);
    res.status(200).json(allScrollChapters);
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

const addNewChapter = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const scrollId = req.params.scroll_id;
    console.log(userId);
    let newChapterInfo = {
      userId: userId,
      scrollId: scrollId,
      body: req.body.body,
    };
    console.log(newChapterInfo);

    const newChapter = await Chapter.create(newChapterInfo);

    res.status(200).json(newChapter);
  } catch (error) {
    throw error;
  }
};

const updateChapter = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const chapterId = req.params.chapter_id;

    let chapterToUpdate = await Chapter.update(req.body, {
      where: {
        [Sequelize.Op.and]: [{ id: chapterId }, { userId: userId }],
      },
      returning: true,
    });
    res.status(200).json(chapterToUpdate);
  } catch (error) {
    throw error;
  }
};

const deleteChapter = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id);
    const chapterId = parseInt(req.params.chapter_id);
    const chapterToDelete = await Chapter.findByPk(chapterId);
    let message = Object.assign({}, chapterToDelete);
    await Chapter.destroy({
      where: { [Sequelize.Op.and]: [{ id: chapterId }, { userId: userId }] },
    });
    res.status(200).json({
      alert: `Deleted chapter with an ID of ${chapterId}, belonging to user ID ${userId}`,
      destroyed: message,
    });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  showAllChapters,
  showChapterById,
  showChaptersByUserId,
  showChaptersByScrollId,
  searchForChapter,
  addNewChapter,
  updateChapter,
  deleteChapter,
};

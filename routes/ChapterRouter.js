const Router = require("express").Router();
const controller = require("../controllers/ChapterController");

Router.get("/", controller.showAllChapters);
Router.get("/:chapter_id", controller.showChapterById);

module.exports = Router;

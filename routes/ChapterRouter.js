const Router = require("express").Router();
const controller = require("../controllers/ChapterController");

Router.get("/", controller.showAllChapters);
Router.get("/:chapter_id", controller.showChapterById);
Router.get("/users/:user_id", controller.showChaptersByUserId);
Router.post("/search", controller.searchForChapter);

module.exports = Router;

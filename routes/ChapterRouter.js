const Router = require("express").Router();
const controller = require("../controllers/ChapterController");

Router.get("/", controller.showAllChapters);
Router.get("/:chapter_id", controller.showChapterById);
Router.get("/users/:user_id", controller.showChaptersByUserId);
Router.get("/scrolls/:scroll_id", controller.showChaptersByScrollId);

Router.post("/search", controller.searchForChapter);

Router.post(
  "/users/:user_id/scrolls/:scroll_id/create",
  controller.addNewChapter
);

Router.put("/users/:user_id/chapters/:chapter_id", controller.updateChapter);

Router.delete("/users/:user_id/chapters/:chapter_id", controller.deleteChapter);

module.exports = Router;

const Router = require("express").Router();
const controller = require("../controllers/ChapterController");

Router.get("/", controller.showAllChapters);

module.exports = Router;

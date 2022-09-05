const Router = require("express").Router();
const controller = require("../controllers/ScrollController");

Router.get("/", controller.showAllScrolls);

module.exports = Router;

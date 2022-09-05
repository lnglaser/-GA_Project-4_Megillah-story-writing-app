const Router = require("express").Router();
const controller = require("../controllers/ScrollController");

Router.get("/", controller.showAllScrolls);
Router.get("/:scroll_id", controller.showScrollById);
Router.get("/users/:user_id", controller.showScrollsByUserId);

Router.post("/search", controller.searchForScroll);

Router.post("/:user_id/create", controller.addNewScroll);

module.exports = Router;

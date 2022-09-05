const Router = require("express").Router();
const controller = require("../controllers/ScrollController");

Router.get("/", controller.showAllScrolls);
Router.post("/search", controller.searchForScroll);
Router.get("/:scroll_id", controller.showScrollById);
Router.get("/users/:user_id", controller.showScrollsByUserId);

Router.post("/:user_id/create", controller.addNewScroll);

Router.put("/users/:user_id/scrolls/:scroll_id", controller.updateScroll);

module.exports = Router;

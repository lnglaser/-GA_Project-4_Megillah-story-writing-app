const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/", controller.showAllUsers); //tested, works
Router.get("/:user_id", controller.showUserById); //tested, works

Router.post("/search", controller.showUserByName); //tested, works

module.exports = Router;

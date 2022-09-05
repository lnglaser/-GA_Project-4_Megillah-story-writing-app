const Router = require("express").Router();

const controller = require("../controllers/AuthController");

// const middleware = require("../middleware");

Router.post("/register", controller.addUser); //doesn't work

module.exports = Router;

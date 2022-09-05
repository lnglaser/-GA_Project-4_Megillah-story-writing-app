const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const ScrollRouter = require("./ScrollRouter");
const ChapterRouter = require("./ChapterRouter");
const AuthRouter = require("./AuthRouter");

Router.use("/users", UserRouter);
Router.use("/scrolls", ScrollRouter);
Router.use("/chapters", ChapterRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;

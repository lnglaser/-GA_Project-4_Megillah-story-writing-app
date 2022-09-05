const Router = require("express").Router();

const UserRouter = require("./UserRouter");
const ScrollRouter = require("./ScrollRouter");

Router.use("/users", UserRouter);
Router.use("/scrolls", ScrollRouter);

module.exports = Router;

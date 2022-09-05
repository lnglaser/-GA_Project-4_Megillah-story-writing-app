const { User } = require("../models");
const Sequelize = require("sequelize");

const addUser = async (req, res) => {
  try {
    let newUserInfo = {
      ...req.body,
    };
    console.log(newUserInfo.email);
    //attempting to add email/username constraints to registering new user - check sequelize docs for Unique constraint to be added to models? New migration

    // let emailList = await User[email].findAll();
    // console.log(emailList);
    const newUser = await User.create(newUserInfo);
    res.status(200).json(newUser);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
};

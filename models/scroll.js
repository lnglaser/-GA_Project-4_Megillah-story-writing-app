"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scroll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scroll.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Scroll.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      title: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Scroll",
      tableName: "scrolls",
    }
  );
  return Scroll;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chapter.belongsTo(models.User, { foreignKey: "userId" });
      Chapter.belongsTo(models.Scroll, { foreignKey: "scrollId" });
    }
  }
  Chapter.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      scrollId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "scrolls",
          key: "id",
        },
      },
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Chapter",
      tableName: "chapters",
    }
  );
  return Chapter;
};

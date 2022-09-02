"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "John",
          email: "demo@demo.com",
          password: "$321!pass!123$",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userName: "Jane",
          email: "fake@dfake.com",
          password: "$321!pass!123$",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

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
      "scrolls",
      [
        {
          userId: 1,
          title: "Story Title 1",
          body: "Lorem ipsum",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 1,
          title: "Story Title 2",
          body: "Yadda yadda yadda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 2,
          title: "Story Title 3",
          body: "Dark and stormy night",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 2,
          title: "Story Title 4",
          body: "A truth universally acknowledged",
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

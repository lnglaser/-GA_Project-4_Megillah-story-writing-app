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
      "chapters",
      [
        {
          userId: 1,
          scrollId: 1,
          body: "quia dolor sit amet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          scrollId: 1,
          body: "consectetur, adipisci velit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          scrollId: 2,
          body: "blah blah blah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          scrollId: 2,
          body: "yakety yak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          scrollId: 3,
          body: "the rain fell in torrents",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          scrollId: 3,
          body: "except at occasional intervals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          scrollId: 4,
          body: "that a single man in possession of a good fortune",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          scrollId: 4,
          body: "must be in want of a wife",
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

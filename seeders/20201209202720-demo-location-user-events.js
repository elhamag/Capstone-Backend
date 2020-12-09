"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let locations = await queryInterface.bulkInsert("Locations", [
      { name: "New York", place: "Alligator Lounge • Brooklyn, NY"},
      { name: "New York", place: "Live on Zoom"},
    ]);

    let events = await queryInterface.bulkInsert("Events", [
      { name: "The Lion King!", locationId: 1 },
      { name: "The Book of Mormon", locationId: 2 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Marc" },
      { name: "Diesel" },
    ]);

    let userLocations = await queryInterface.bulkInsert("Userlocations", [
      { userId: 1, locationId: 1 },
      { userId: 2, locationId: 2 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
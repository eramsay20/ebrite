'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Free'},
      { category: 'Music'},
      { category: 'Gaming'},
      { category: 'Shows'},
      { category: 'Classes'},
      { category: 'Networking'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
  }
};

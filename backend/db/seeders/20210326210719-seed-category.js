'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Free'},
      { category: 'Music'},
      { category: 'Game'},
      { category: 'Show'},
      { category: 'Class'},
      { category: 'Network'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
  }
};

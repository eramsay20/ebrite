'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { category: 'Free'},
      { category: 'Music'},
      { category: 'Games'},
      { category: 'Food & Drink'},
      { category: 'Networking'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
  }
};

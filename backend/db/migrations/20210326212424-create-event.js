'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      host: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      time: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ticketPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categories'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};

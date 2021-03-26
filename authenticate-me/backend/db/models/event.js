'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    host: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ticketPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Categories'},
    },
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};

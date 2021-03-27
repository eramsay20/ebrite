'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Events' },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    ticketCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Registration.associate = function(models) {
    // 1:Many Event <> Registrations, one event can have many registrations
    Registration.belongsTo(models.Event, { foreignKey: 'eventId'});

    // 1:Many User <> Registrations, one user can have many registrations
    Registration.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Registration;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [4, 30],
        isNotEmail(value){
          if(Validator.isEmail(value)){
            throw new Error('Cannot be an email.');
          }
        }
      }
    }
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validation: {
        len: [3, 256],
        isEmail: true;
      }
    }
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validation: {
        len: [60, 60],
      }
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

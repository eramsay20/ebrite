'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validation: {
        len: [4, 30],
        isNotEmail(value){
          if(Validator.isEmail(value)){
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true,
      validation: {
        len: [3, 256],
        isEmail: true,
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validation: {
        len: [60, 60],
      }
    },
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
    // 1:Many, User <> Registrations, one user can have many registration entries
    User.hasMany(models.Registration, { foreignKey: 'userId'});

    // Many:Many Event <> User; many users can 'favorite' many events; each favorite adds a row to the favorites table
    const columnMapping = {
      through: 'Favorite', // relationship exists 'through' the join table, Favorite
      otherKey: 'eventId', // key on Event table to reference the join table
      foreignKey: 'userId', // key on User table to reference the join table
    }
    User.belongsToMany(models.Event, columnMapping);
  };

  // INSTANCE METHODS --------
  // return an obj with User instance info that's safe to save to a JWT.
  User.prototype.toSafeObject = function() {
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  // return boolean whether user password is validated successfully
  User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // STATIC METHODS --------
  // returns id of current user while using currentUser scope
  User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
  };

  // login user with provided object containing either username OR email, and password
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};

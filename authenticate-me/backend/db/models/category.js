'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    }
  }, {});
  Category.associate = function(models) {
    // 1:Many, Category <> Events, one category can be applied to many event entries
    Category.hasMany(models.Event, { foreignKey: 'categoryId'});
  };
  return Category;
};

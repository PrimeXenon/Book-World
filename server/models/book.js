'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.User, { through: 'models.User_Book' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    page: DataTypes.INTEGER,
    author: DataTypes.STRING,
    status: DataTypes.ENUM('idle', 'rent')
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
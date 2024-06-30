'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    picture: DataTypes.STRING,
    variation: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    name: DataTypes.STRING,
    shipping_cost: DataTypes.INTEGER,
    assessment: DataTypes.INTEGER,
    profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return Products;
};
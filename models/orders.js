'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    addres: DataTypes.STRING,
    option: DataTypes.STRING,
    message: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    payment_details: DataTypes.STRING,
    confirmation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return Orders;
};
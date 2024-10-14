'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BypassQueues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BypassQueues.belongsToMany(models.User,{through:'QueuesOptionUser' })
    }
  }
  BypassQueues.init({
    nameQueue: DataTypes.STRING,
    isActived: DataTypes.BOOLEAN,
    dateBegin: DataTypes.DATE,
    dateEnd: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BypassQueues',
  });
  return BypassQueues;
};
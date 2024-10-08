'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userspreference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     // Userspreference.belongsTo('User');
    }
  }
  Userspreference.init({
    bgcolor: DataTypes.STRING,
    bgcolorsmall: DataTypes.STRING,
    gender: DataTypes.STRING,
    userId:DataTypes.INTEGER,
    isActived:DataTypes.BOOLEAN,
    emotionsmessage:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Userspreference',
  });
  return Userspreference;
};
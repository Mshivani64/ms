const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const UserOTP = sequelize.define('UserOTP', {
 UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  OTP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ExpiryTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},);

module.exports = UserOTP;
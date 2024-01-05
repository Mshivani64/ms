const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('tblUserMaster', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  EnrollmentCenter: {
    type: DataTypes.STRING(100),
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Mobile: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING(100),
  },
  IsActive: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  CreatedOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  ModifiedOn: {
    type: DataTypes.DATE,
  },
});

module.exports = User;

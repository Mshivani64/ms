// models/userRoleModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const UserRole = sequelize.define(
  'tblUserRole',
  {
    Ncode: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    UserRole: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    CreatedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    ModifiedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
 
);

module.exports = { UserRole };

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Branch = sequelize.define('tblBranchMaster', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  BranchName: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  BranchCode: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  CountryId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  StateId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  CityId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  LocalityId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  PostalCode: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Contact: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Mobile: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  IsActive: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
});

module.exports = Branch;

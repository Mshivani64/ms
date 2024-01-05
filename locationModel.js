// locationModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Location = sequelize.define('tblLocation', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  LocationName: {
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
  },
});

module.exports = Location;

// models/localityModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Locality = sequelize.define('tblLocality', {
  Ncode: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  LocalityName: {
    type: DataTypes.STRING,
  },
  CityId: {
    type: DataTypes.STRING,
  },
  CountryId: {
    type: DataTypes.STRING,
  },
  StateId: {
    type: DataTypes.STRING,
  },
  IsActive: {
    type: DataTypes.STRING,
  },
  CreatedOn: {
    type: DataTypes.DATE,
  },
  CreatedBy: {
    type: DataTypes.STRING,
  },
  ModifiedOn: {
    type: DataTypes.DATE,
  },
  ModifiedBy: {
    type: DataTypes.STRING,
  },
  Pincode: {
    type: DataTypes.STRING,
  },
});

module.exports = Locality;

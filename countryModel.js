// models/countryModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Country = sequelize.define('tblCountry', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  CountryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CountryShortName: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}
);

module.exports = Country;

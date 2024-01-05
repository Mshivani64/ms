const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const City = sequelize.define('City', {
  CityName: {
    type: DataTypes.STRING,
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
  IsActive: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = City;

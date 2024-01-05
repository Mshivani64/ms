const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const State = sequelize.define('tblState', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  StateName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CountryId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, );

module.exports = State;

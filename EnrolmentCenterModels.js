
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const EnrolmentCenter = sequelize.define('tblEnrolmentCenter', {
    Ncode: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
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
    Address1: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    Address2: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    Landmark: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    ContactPersonName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ContactPersonEmail: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ContactPersonMobile: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    }
  });
  
  module.exports = EnrolmentCenter;
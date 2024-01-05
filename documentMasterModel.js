// models/documentMasterModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const DocumentMaster = sequelize.define(
  'tblDocumentMaster',
  {
    Ncode: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    DocumentName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    DocumentType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    DocumentValue: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    DocumentRequired: {
      type: DataTypes.CHAR(1),
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

module.exports = DocumentMaster;

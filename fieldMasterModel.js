const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const FieldMaster = sequelize.define('tblFieldMaster', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  FieldName: {
    type: DataTypes.STRING(100),
  },
  FieldType: {
    type: DataTypes.STRING(100),
  },
  FieldValue: {
    type: DataTypes.STRING,
  },
  FieldRequired: {
    type: DataTypes.CHAR(1),
  },
  IsActive: {
    type: DataTypes.CHAR(1),
  },
  CreatedOn: {
    type: DataTypes.DATE,
  },
  ModifiedOn: {
    type: DataTypes.DATE,
  },
});

module.exports = FieldMaster;

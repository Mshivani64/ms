const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/dbConfig');

const BookAppointment = sequelize.define('tblBookAppointment', {
  Ncode: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  EnrollmentCenterName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AppointmentCenterId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  CenterPostalCode: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  PersonalDetails: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Documant: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  AppointmentSlotBookId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  AppointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ApointmentTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  IsActive: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    validate: {
      isIn: [['Y', 'N']],
    },
  },
  IsApprove: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    validate: {
      isIn: [[ 'N']],
    },
  },
  CreatedOn: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = BookAppointment;

const {
    DataTypes
} = require('sequelize');
const sequelize = require('../config/dbConfig');

const AppointmentSlot = sequelize.define('tblAppointmentSlot', {
    Ncode: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    EnrollmentCenterName: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },

    SlotDate: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    SlotFromTime: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    SlotToTime: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    AppointmentPerSlot: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    IsActive: {
        type: DataTypes.CHAR(1),
        allowNull: false,
    },
});

module.exports = AppointmentSlot;
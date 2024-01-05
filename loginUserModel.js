const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('tblUserMaster', {

    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING(100),
    },
});

module.exports = User;
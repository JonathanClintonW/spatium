const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    member_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNUll: false,
    },
    city_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    province_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'addresses',
    timestamps: false
});

module.exports = Address;
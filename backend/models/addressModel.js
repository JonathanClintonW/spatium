const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./memberModel');

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

Address.belongsTo(Member, { foreignKey: 'member_id' });

module.exports = Address;
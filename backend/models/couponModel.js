const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Coupon = sequelize.define('Coupon', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    valid_from: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    valid_until: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
}, {
    tableName: 'coupons',
    timestamps: false
});

module.exports = Coupon;
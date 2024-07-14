const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./orderModel');

const Payment = sequelize.define('Payment', {
    order_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
}, {
    tableName: 'payments',
    timestamps: false
});

Payemnt.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = Payment;
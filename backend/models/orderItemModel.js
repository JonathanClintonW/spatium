const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./orderModel');
const Product = require('./productModel');

const OrderItem = sequelize.define('OrderItem', {
    order_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    product_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
}, {
    tableName: 'order_items',
    timestamps: false
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = OrderItem;
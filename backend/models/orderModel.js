const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./memberModel');
const Address = require('./addressModel');
const OrderItem = require('./orderItemModel');

const Order = sequelize.define('Order', {
    member_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    address_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'orders',
    timestamps: false
});

Order.belongsTo(Member, { foreignKey: 'member_id' });
Order.belongsTo(Address, { foreignKey: 'address_id' });
Order.hasMany(OrderItem, { foreignKey: 'order_id' });

module.exports = Order;
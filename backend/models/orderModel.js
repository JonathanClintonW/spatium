const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./memberModel');
const Product = require('./productModel');
const Address = require('./addressModel');

const Order = sequelize.define('Order', {
    member_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    product_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    address_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
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

Cart.belongsTo(Member, { foreignKey: 'member_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });
Cart.belongsTo(Address, { foreignKey: 'address_id' });

module.exports = Order;
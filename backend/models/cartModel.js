const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./memberModel');
const Product = require('./productModel');

const Cart = sequelize.define('Cart', {
    member_id: {
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
}, {
    tableName: 'carts',
    timestamps: false
});

Cart.belongsTo(Member, { foreignKey: 'member_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = Cart;
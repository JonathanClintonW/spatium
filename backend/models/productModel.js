const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    tokopedia_url: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    shopee_url: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false
});

module.exports = Product;
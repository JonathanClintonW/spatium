const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./productModel');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
}, {
    tableName: 'categories',
    timestamps: false
});

Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = Category;
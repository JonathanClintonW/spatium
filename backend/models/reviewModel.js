const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./memberModel');
const Product = require('./productModel');

const Review = sequelize.define('Review', {
    product_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    member_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    }
}, {
    tableName: 'reviews',
    timestamps: false
});

Cart.belongsTo(Member, { foreignKey: 'member_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = Review;
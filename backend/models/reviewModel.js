const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Review;
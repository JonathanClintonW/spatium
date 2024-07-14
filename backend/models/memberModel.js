const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Address = require('./addressModel');
const Cart = require('./cartModel');
const Order = require('./orderModel');
const Review = require('./reviewModel');

const Member = sequelize.define('Member', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'members',
  timestamps: false
});

Member.hasMany(Address, { foreignKey: 'member_id' });
Member.hasMany(Cart, { foreignKey: 'member_id' });
Member.hasMany(Order, { foreignKey: 'member_id' });
Member.hasMany(Review, { foreignKey: 'member_id' });

module.exports = Member;
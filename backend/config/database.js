const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('spatium', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

// server/models/Conference.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Conference = sequelize.define('Conference', {
  hostSocketId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  participants: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
});

module.exports = Conference;

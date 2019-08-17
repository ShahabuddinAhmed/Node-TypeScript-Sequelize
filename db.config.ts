import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db: any = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const arr = [
  sequelize,
  Sequelize
];
const User = require('./../models/user')(...arr);
const Book = require('./../models/book')(...arr);
db.User;
db.Book;
User.hasOne(Book);

module.exports = sequelize;
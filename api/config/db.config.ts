import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('testdb', 'root', '', {
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
db.User = require('./../models/user');
db.Book = require('./../models/book');
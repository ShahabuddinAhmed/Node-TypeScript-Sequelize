import * as express from 'express';
import { morgan } from 'morgan';
import * as bodyParser from 'body-parser'
const cors = require('cors');

// const sequelize = require('./api/connfig/db.config');
// const userRoutes = require('./api/routes/user');
const app = express();

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// sequelize.sync({ force: false }).then(() => {
//   console.log('Drop and Resync with { force: false }');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
     res.json({
         error: {
             message: error.message
         }
     });
});

module.exports.app = app;
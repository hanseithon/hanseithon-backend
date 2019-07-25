const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./database').sequelize;
const dotenv = require('dotenv');

dotenv.config();

const app = express();

sequelize.sync();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', require('./routes/controllers/user.controller'));
app.use('/board', require('./routes/controllers/board.controller'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

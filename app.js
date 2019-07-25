const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./database').sequelize;
/* 
const userController = ; */
console.log(1);

const app = express();

sequelize.sync();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(2);
app.use('/user', require('./routes/controllers/user.controller'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

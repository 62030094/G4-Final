var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var coG1Router = require('./routes/coG1');
var coG2Router = require('./routes/coG2');
var coG3Router = require('./routes/coG3');
var coG4Router = require('./routes/coG4');
var coG5Router = require('./routes/coG5');
var coG6Router = require('./routes/coG6');
var coG7Router = require('./routes/coG7');
var coG8Router = require('./routes/coG8');
var coG9Router = require('./routes/coG9');
var coG10Router = require('./routes/coG10');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/coG1', coG1Router);
app.use('/coG2', coG2Router);
app.use('/coG3', coG3Router);
app.use('/coG4', coG4Router);
app.use('/coG5', coG5Router);
app.use('/coG6', coG6Router);
app.use('/coG7', coG7Router);
app.use('/coG8', coG8Router);
app.use('/coG9', coG9Router);
app.use('/coG10', coG10Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

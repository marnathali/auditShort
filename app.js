var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
//const morgan = require('morgan');
const indexRouter = require('./routes/index');
const questionRouter = require('./routes/question');
const urlRouter = require('./routes/url');


var app = express();


let dev_db_url = 'mongodb://nath:abc123@ds155076.mlab.com:55076/audits';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas de vistas
app.use('/', indexRouter);

//Rutas de servicios
app.use('/question', questionRouter);
app.use('/url', urlRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
function errorHandler(err, req, res){
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  console.log("Error: " + res.locals.error.status);
  console.log("Message: " + res.locals.message);
  console.log("Description: " + res.locals.error.stack);
  res.render('error', { layout: 'layouts/error',
                        extractScripts: true,
                        extractStyles: true,
                        title: 'Error: ' + res.locals.error.status
                      });
}

// error handler
app.use(function(err, req, res, next) {
  errorHandler(err, req, res);
});

module.exports = app;

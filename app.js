var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.use('/client',express.static(__dirname + '/client'));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, '/public/img/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
    name:"sKey",
    secret:'FDCO',
    resave:false,
    saveUninitialized:false
}));
app.use(express.static(path.join(__dirname, 'public'), {maxAge : 86400000}));
app.use('/', routes);

module.exports = app;

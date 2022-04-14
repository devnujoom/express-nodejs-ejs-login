const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');


// .env file for config
require('dotenv').config()
const PORT = process.env.PORT || 6000;

// Define App
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// connect database
var mysql= require('mysql');
var connection = require('./db/db');

// listening to Server
app.listen(PORT,() => {
  console.log(`listing to port:${PORT}, http://localhost:${PORT}`)
});

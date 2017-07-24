/*
** Modules importation
*/

var express = require('express');
var path = require('path'); // System path constructor
var logger = require('morgan'); // HTTP request logger (colored)
var bodyParser = require('body-parser'); // Mono-part parser to add a .body to req

/*
** Create Express application
*/

var app = express();

/*
** Set view engine
*/

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

/*
** Routes setting
*/

var index = require('./routes/index');

app.use('/', index);

/*
** Use required middlewares
*/

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


/*
** Catch 404 and forward to error handler
*/

app.use(function (req, res, next) {
    'use strict';
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/*
** Error handler
*/

app.use(function (err, req, res, next) {
    'use strict';
	// Set locals to only provide errors in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// Render the error page
	res.status(err.status || 500);
	res.render('error');

});

/*
** Export the current configuration
*/

module.exports = app;

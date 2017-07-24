/*
** Modules importation
*/

var express = require('express');
var router = express.Router();

/*
** Home page
*/

router.get('/', function (req, res, next) {
    'use strict';
	res.render('index', { title: 'CGI Template Application'});
});

/*
** Export the current route
*/

module.exports = router;
var http = require('http');
var express = require('express');
var app = express();

var iniparser = require('iniparser');

var config = iniparser.parseSync('./config.ini');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));


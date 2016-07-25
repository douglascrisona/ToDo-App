var express = require('express');
var MongoClient = require('mongodb').MongoClient
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

var todos = require('./routes/todos.js');
app.use('/todos', todos);

app.listen(8080)

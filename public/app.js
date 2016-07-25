var app = angular.module('todo', []);
var express = require('express');
var MongoClient = require('mongodb').MongoClient
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

var todos = require('./routes/create-todo.js');
app.use('/todos', todos);

app.controller('homeController', home);

function home() {
  var vm = this;
  vm.message = 'Stuff you have to do:'
  vm.todos = [
    {item: 'Wake up'},
    {item: 'Eat breakfast'},
    {item: 'Go to school'},
    {item: 'Eat more'},
    {item: 'Go to sleep'}
  ]
}


app.listen(8080)
//Add the ng-show directive, use it to display the number of todo items.

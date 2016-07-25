var express = require('express')
var todos = express.Router()
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')

todos.use(bodyParser.json())

var url = 'mongodb://localhost:27017/todos'



todos.post('/:item', function(req, res) {
  var todo = {}
  todo.task = req.params.item

  console.log(todo)
  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log('Not Connected')
    } else {
      console.log('Connected correctly to server')
    }
    var todos = db.collection('todos')
    todos
      .insertMany([
        todo
      ],
      function(err, result) {
        db.close()
      }
    )
  });
  res.send('Todo Added')
});

todos.get('/', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log('Not connected')
    } else {
      console.log("Connected correctly to server");
      var todos = db.collection('todos')
      todos
        .find({})
        .toArray(function(error, docs) {
            db.close()
        });
      }
  });
  res.send('Hello')
})

todos.put('/:item/:status', function(req, res) {
  var status =
  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log('Not Connected')
    } else {
      console.log('Connected correctly to server')
    }
    var todos = db.collection('todos');
    todos
      .updateOne(
        {task: req.params.item},
        {$set: {status: req.params.status}},
        function(err, result) {
          db.close()
        }
      )
  });
  res.send('Todo Updated.')
});

todos.delete('/:item', function(req, res) {
  var task = req.params.item
  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log('Not Connected')
    } else {
      console.log('Connected correctly to server')
    }
    var todos = db.collection('todos')
    todos
      .deleteOne(
        {task: task},
        function(err, result) {
          db.close()
        }
      )
  })
  res.send('Todo Removed.')
})


module.exports = todos;

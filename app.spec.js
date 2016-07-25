var request = require('request');
var chai = require('chai')
var assert = chai.assert;

var url = 'http://localhost:8080/todos'

describe('C', function(){
  it('Expects a todo item', function(done) {
    request({url: url, method: 'POST'},
    function(error, response) {
      assert.equal(response.statusCode, 404)
      done();
    });
  });
  it('Creates a new todo', function(done) {
    request({url: 'http://localhost:8080/todos/Run', method: 'POST'},
    function(error, response) {
      assert.equal(response.body, 'Todo Added')
      done();
    });
  });
});

describe('R', function() {
  it('Expects todos', function(done) {
    request({url: 'http://localhost:8080/todos', method: 'GET'},
    function(error, response) {
      assert.equal(response.statusCode, 404)
      done();
    });
  });
  it('Lets you view todos', function(done) {
    request({url: 'http://localhost:8080/todos/all', method: 'GET'},
    function(error, response) {
      assert.equal(response.body, 'Hello')
      done();
    });
  });
});

describe('U', function() {
  it('Expects a todo item', function(done) {
    request({url: url, method: 'PUT'},
    function(error, response) {
      assert.equal(response.statusCode, 404)
      done();
    });
  });
  it('Lets you update a todo', function(done) {
    request({url: 'http://localhost:8080/todos/Run/Done', method: 'PUT'},
    function(error, response) {
      assert.equal(response.body, 'Todo Updated.')
      done();
    });
  });
});

describe('D', function() {
  it('Expects a todo item to delete', function(done) {
    request({url: url, method: 'DELETE'},
    function(error, response) {
      assert.equal(response.statusCode, 404)
      done();
    });
  });
  it('Deletes an item', function(done) {
    request({url: 'http://localhost:8080/todos/Run', method: 'DELETE'},
    function(error, response) {
      assert.equal(response.body, 'Todo Removed.')
      done();
    });
  });
});

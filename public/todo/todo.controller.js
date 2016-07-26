var app = angular.module('todo');

app.controller('todoController', todo);

todo.$inject = ['$http'];

function todo($http) {
  var vm = this;
  activate();

  function activate() {
    viewTodos();
  }
  vm.message = 'Stuff you have to do:'

  function viewTodos() {
    var todos = $http.get('http://localhost:8080/todos/all');
    todos.then(function(todo) {
      vm.list = todo.data
    })

  }
}

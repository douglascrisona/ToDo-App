var app = angular.module('todo', []);


app.controller('homeController', home);

function home() {
  var vm = this;
  vm.message = 'Stuff you have to do:'
  vm.todos = [
    {item: 'Wake up'},
    {item: 'Eat breakfast'},
    {item: 'Go to school'},
    {item: 'Eat more'},
    {item: 'Got to sleep'}
  ]
}

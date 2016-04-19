toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  var self = this;
  this.getAll = function() { 
    var todos = [];
    _fetchTodosFromApi(todos);
    return todos;
  };

  function _fetchTodosFromApi(todos) {
    $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        _handleResponseFromApi(response.data, todos)
      }, function(err) {});
  };

  function _handleResponseFromApi (data, todos) {
    data.forEach(function(data) {
      todos.push(new ToDoFactory(data.text));
    });
  };
}]);


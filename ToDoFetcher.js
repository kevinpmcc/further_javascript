toDoApp.service('ToDoService', ['$http', function($http) {

  this.getAll = function() { 
    $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(resp) {
        console.log(resp)
      }, function(err) {
        'no todos'
      });
  };
}]);


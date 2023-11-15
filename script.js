var app = angular.module("todoApp", []);

app.controller("TodoController", function ($scope) {
  $scope.tasks = [];
  $scope.newTask = "";

  $scope.addTask = function () {
    if ($scope.newTask.trim() !== "") {
      $scope.tasks.push({
        name: $scope.newTask,
        completed: false,
      });
      $scope.newTask = "";
    }
  };

  $scope.removeTask = function (task) {
    var index = $scope.tasks.indexOf(task);
    if (index !== -1) {
      $scope.tasks.splice(index, 1);
    }
  };

  $scope.toggleCompleted = function (task) {
    task.completed = !task.completed;
  };

  // Inicializa com algumas tarefas de exemplo
  $scope.tasks.push({ name: "Fazer compras", completed: false });
  $scope.tasks.push({ name: "Lavar o carro", completed: true });
});

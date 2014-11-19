(function() {
  // Define an angular module with a list of dependencies
  angular
    .module('app', [])
    .controller('TodoListCtrl', TodoListCtrl);

  function TodoListCtrl() {
    var ctrl = this;

    ctrl.todos = [];
    ctrl.newTodo = null;
    ctrl.addTodo = addTodo;

    ctrl.filters = [
      { title: 'All' },
      { title: 'Todo', value: { done: false } },
      { title: 'Done', value: { done: true } }
    ];
    ctrl.selectedFilter = ctrl.filters[0];

    function addTodo(todo) {
      ctrl.todos.push({
        title: todo.title,
        done: false
      });

      ctrl.newTodo = null;
    }
  }
})();

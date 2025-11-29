const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
})

function addTodo() {
    const todoTest = todoInput.value.trim();
    if (todoTest.length > 0) {
        allTodos.push(todoTest);
        createTodoItem(todotest);
        todoInput.value = '';
    }
}
function createTodoItem(todo) {
    const todoLI = document.createElement('li');
    todoLI.innerText = todo;
    todoListUL.append(todoLI);
}
"use strict";
const btn = document.getElementById("myBtn");
const inp = document.getElementById("todoInput");
const form = document.getElementById("todoForm");
const ul = document.getElementById("todoList");
;
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON == null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
const todos = readTodos();
todos.forEach(createTodo);
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    ul.append(newLI);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: inp.value,
        completed: false,
    };
    todos.push(newTodo);
    inp.value = "";
    createTodo(newTodo);
    saveTodos();
});

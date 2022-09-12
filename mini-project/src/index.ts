const btn = document.getElementById("myBtn") as HTMLButtonElement;
const inp = document.getElementById("todoInput") as HTMLInputElement;
const form = document.getElementById("todoForm") as HTMLFormElement;
const ul = document.getElementById("todoList") as HTMLUListElement;

interface Todo {
    text: string;
    completed: boolean;
};

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON == null) return [];
    return JSON.parse(todosJSON);
}

function saveTodos(): void {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked;
        saveTodos();
    });

    newLI.append(todo.text);
    newLI.append(checkbox);
    ul.append(newLI);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const newTodo: Todo = {
        text: inp.value,
        completed: false,
    };

    todos.push(newTodo);
    inp.value = "";

    createTodo(newTodo);
    saveTodos();
})
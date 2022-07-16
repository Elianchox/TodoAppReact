import { saveTodo } from './saveTodos';
const deleteTodo = (text, todos, setTodos) =>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos, setTodos);
}

export { deleteTodo };

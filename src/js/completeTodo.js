import { saveTodo } from './saveTodos';
const completeTodo = (text, todos, setTodos) =>{
    const todoIndex = todos.findIndex(todo=>todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos, setTodos);
}

export { completeTodo };

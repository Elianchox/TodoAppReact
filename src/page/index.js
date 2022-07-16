import React from 'react';
import { TodoCreateTask } from '../container/TodoCreateTask';
import { TodoTasks } from '../container/TodoTasks';
import { TodoCreateTaskMb } from '../container/TodoCreateTaskMb';

// const defaultTodos = [
//     {text:"Cortar cebolla", completed:false},
//     {text:"Tomar el curso de intro a React", completed:false},
//     {text:"Llorar con la llorona", completed:true},
// ];

function Index() {

    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTOdos;

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', '[]');
        parsedTOdos = [];
    }else{
        parsedTOdos = JSON.parse(localStorageTodos);
    }

    const [searchValue, setSearchValue] = React.useState("");
    
    const [todos, setTodos] = React.useState(parsedTOdos);
    const completedTodos = todos.filter(todo => !! todo.completed).length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    }else{

        searchedTodos = todos.filter(todo =>{
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <React.Fragment>
            <main className='w-full h-screen flex justify-center content-center py-8'>
                <TodoCreateTask />
                <TodoTasks
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    completedTodos={completedTodos}
                    searchedTodos={searchedTodos}
                    todos={todos}
                    setTodos={setTodos}
                />
                <TodoCreateTaskMb />
            </main>
        </React.Fragment>
    );
}

export { Index };

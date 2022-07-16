import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../container/TodoList';
import { TodoItem } from '../Components/TodoItem';



function TodoTasks({searchValue, setSearchValue, completedTodos, searchedTodos, todos, setTodos}) {

    return(
        <div className='h-full lg:my-auto lg:h-5/6 lg:w-3/6 px-8 rounded-3xl  flex flex-col w-full'>
            <h2 className='text-5xl h-20 py-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-900'>My Tasks</h2>
            
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={todos.length}
            />

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map((todo, index) =>( 
                <TodoItem 
                    key={index} 
                    text={todo.text}
                    completed={todo.completed}
                    todos={todos}
                    setTodos={setTodos}
                />
                ))}
            </TodoList>
        </div>
    );
}

export { TodoTasks };
import React from 'react';

function TodoCounter({completedTodos, totalTodos}) {
    return(
        <h3 className='text-center text-green-500 font-bold text-2xl my-2'>  Has completado {completedTodos} de {totalTodos} Todos</h3>
    );
}

export { TodoCounter };

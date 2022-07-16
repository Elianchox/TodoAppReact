import React from 'react';
import { CreateTodoButtonMb } from '../Components/CreateTodoButtonMb';

function TodoCreateTaskMb(){
    return(
        <div className='lg:hidden fixed bottom-0 right-0 m-4'>
            <CreateTodoButtonMb />
        </div>
    )
}

export { TodoCreateTaskMb };

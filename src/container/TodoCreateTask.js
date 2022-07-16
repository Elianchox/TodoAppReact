import React from 'react';
import { CreateTodoButton } from '../Components/CreateTodoButton';

const styles ={
    color: 'red',
    backgroundColor:'yellow'

};

function TodoCreateTask(){
    return(
        <div className='h-5/6 w-2/6 flex-col py-8 px-12 mx-8 my-auto bg-white rounded-3xl drop-shadow-2xl hidden lg:flex'>
            <h1 className='text-indigo-600 text-3xl font-bold text-center'>Create new tasks</h1>
            <div className='flex flex-col w-full my-12 mx-auto'>
                <label className='text-indigo-500 font-bold text-xl' htmlFor="task">Task Name</label>
                <input className='italic border-2 border-gray-100 w-full rounded-2xl bg-gray-100 py-2 px-6 my-2 focus:outline-none focus:border-gray-200' type="text" name="task" id="task" placeholder='Write your new task' />
                <CreateTodoButton />
            </div>
            <img src="/task.png" alt="" className=' img-task content-center mt-auto'/>
        </div>
    )
}

export { TodoCreateTask };

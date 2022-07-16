import React from 'react';
import { Add } from '../js/buttonAdd';

function CreateTodoButton(props){
    return(
        <React.Fragment>
            <button 
                className='my-2 bg-indigo-600 text-white py-2 rounded-xl w-40 mx-auto hover:bg-indigo-800'
                onClick={()=>Add(props.text)}
            
                >
                    Create Task
            </button>
        </React.Fragment>
    )
}

export { CreateTodoButton };
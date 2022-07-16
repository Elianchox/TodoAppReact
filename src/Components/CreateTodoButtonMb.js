import React from 'react';
import { Add } from '../js/buttonAdd';

function CreateTodoButtonMb(props){
    return(
        <React.Fragment>
            <button 
                className='w-12 h-12 p-2 m-4 rounded-full bg-indigo-600 text-white text-2xl text-center font-bold hover:bg-indigo-800'
                onClick={()=>Add(props.text)}
            >
                +
            </button>
            
        </React.Fragment>
    )
}

export { CreateTodoButtonMb };
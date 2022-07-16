import React, { Children } from 'react';
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { completeTodo } from '../js/completeTodo';
import { deleteTodo } from '../js/deleteTodo';

function TodoItem(props){
    return(
        <li className={`w-full h-max p-5 my-3 flex flex-row items-center bg-white border-2 rounded-3xl drop-shadow-lg ${props.completed ? 'border-green-300' : 'border-red-300'}`}>
            
            <span 
                className={`cursor-pointer ${props.completed ? 'text-green-600' : 'text-red-400'}`}
                onClick={()=> completeTodo(props.text, props.todos, props.setTodos)}
            > 
                {props.completed ? <BsFillCheckCircleFill/> : <BsCircle/>} 
            </span>

            <p className={`text-lg mx-8 ${props.completed && 'line-through'}`}>{props.text}</p>
            
            <span 
                className={`ml-auto hover:text-red-600 font-bold cursor-pointer text-xl ${props.completed ? 'text-green-600' : 'text-red-400'}`} onClick={()=> deleteTodo(props.text, props.todos, props.setTodos)}
            >
                X
            </span>
            
        </li>
    )
}

export { TodoItem };
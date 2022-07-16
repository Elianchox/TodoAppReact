import React from 'react';
import { BsFillEyeSlashFill } from "react-icons/bs";

function ButtonHidden(props) {
    return(
        <button className='mt-6 mx-auto cursor-pointer flex flex-row items-center'>
            <span className='text-indigo-500'><BsFillEyeSlashFill/></span>
            <span className='ml-4'>Hide Task Completed</span>
        </button>
    );    
}

export { ButtonHidden };

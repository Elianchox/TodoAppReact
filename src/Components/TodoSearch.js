import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { onSearch } from '../js/onSearch';

function TodoSearch({searchValue, setSearchValue}){

    return(
        <div className='flex items-center mx-auto w-full justify-center my-4'>
            <input 
                placeholder="Cebolla" 
                className='w-3/5 px-8 py-2 rounded-l-xl focus:outline-none border-2 border-gray-200 focus:border-indigo-500'  
                value={searchValue}
                onChange={(event)=>onSearch(event, setSearchValue)} 
            />
            <div className='h-full bg-white flex items-center px-2 rounded-r-xl text-indigo-400 hover:text-indigo-600 border-t-2 border-r-2 border-b-2 border-gray-200 cursor-pointer'>
                <AiOutlineSearch size={28}/>
            </div>
        </div>
    )
}

export { TodoSearch };

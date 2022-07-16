import React, { Children } from 'react';
import { ButtonHidden } from '../Components/ButtonHidden'

function TodoList(props){
    return(
        <React.Fragment>
            <section className='h-full overflow-y-scroll scrollP px-1'>
                <ul className='flex flex-col items-center'>
                    {props.children}
                </ul>
            </section>
            <ButtonHidden/>
        </React.Fragment>
    )
}

export { TodoList };
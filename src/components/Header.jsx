import React from 'react';
import './Header.css'
import Date from './Date';

const Header = () => {
    return ( 
        <>
            <div className='header-date'>
                <h1>Minhas Tarefas</h1>
                {<Date />}
            </div>
        </>
     );
}
 
export default Header;
import React from 'react';
import './Date.css';

const Date = () => {
    let now = new Date
    return ( 
        <h2>{now.getDate()} de {now.getMonth()} de {now.getFullYear()}</h2>
     );
}
 
export default Date;
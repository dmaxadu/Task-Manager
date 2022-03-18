import React from 'react';
import './Date.css';

const date = () => {
    var now = new Date();
    var mes = (now.getMonth() + 1);
    let mesString = '';
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    meses.forEach(function(item, indice) {
        if(mes == indice + 1) mesString = item;
    });

    return ( 
        <div className='date-hour'>
            <h2>{now.getDate()} de {mesString} de {now.getFullYear()}</h2>
        </div>

     );
}
 
export default date;
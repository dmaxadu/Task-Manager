import React, { useEffect, useState } from 'react';
import './Date.css';


const DateHour = () => {
    var now = new Date();
    var mes = (now.getMonth() + 1);
    let mesString = '';
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    meses.forEach(function(item, indice) {
        if(mes == indice + 1) mesString = item;
    });
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(()=>{
            setDate(new Date())
        }, 1000);
    })
    const zeroFill = n => {
        return n < 10 ? '0'+n : n;
    }


    return ( 
        <div className='date-hour'>
            <h2>{now.getDate()} de {mesString} de {now.getFullYear()}</h2>
            <p>{zeroFill(date.getHours())}:{zeroFill(date.getMinutes())}:{zeroFill(date.getSeconds())}</p>
        </div>

     );
}
 
export default DateHour;
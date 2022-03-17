import React from 'react';
import { CgClose } from "react-icons/cg";

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid #FFA401'} : {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button onClick={() => handleTaskDeletion(task.id)} className='remove-task-button'>
                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;
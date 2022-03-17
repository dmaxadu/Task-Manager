import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Date from './components/Date';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import "./App.css";

export default () => {
  const App = () => {
    // let message = "Hello World!";
    /* O state atualiza o componente quando ele é alterado, ao contrário da variável comum acima */
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: true,
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: false,
      },
      
    ]);

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return {...task, completed: !task.completed};

        return task;
      });

      setTasks(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks, 
        {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        },
      ];

      setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)

      setTasks(newTasks);
    };

    return (
      <>
        {/* <div className="date">
          <Date />
        </div> */}
        <div className="container">
          <Header />
          <AddTask handleTaskAddition = {handleTaskAddition} />
          <Tasks tasks = {tasks} handleTaskClick = {handleTaskClick} handleTaskDeletion = {handleTaskDeletion}/>
        </div>
      </>
    );
  };
  return App();
}
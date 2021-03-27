import React, { Fragment } from 'react';
import Task from './Task'

const TasksList = () => {
    const tasks = [
        {name: 'Elegir Plataforma', done: true},
        {name: 'Elegir Colores', done: true},
        {name: 'Elegir Plataformas de pago', done: false},
    ]

    return (
        <Fragment>    
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className='tasks-list'>
                {tasks.length === 0 
                    ? <li className='task'><p>Este proyecto no tiene tareas</p></li> 
                    : tasks.map(task=><Task task={task}/>)
                }
            </ul>
        </Fragment>
    );
};

export default TasksList;
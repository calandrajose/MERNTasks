import React, { Fragment, useContext } from 'react';
import Task from './Task'
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {
    const projectsContext = useContext(projectContext)
    const {currentProject, deleteProject} = projectsContext;
    if(!currentProject)return <h2>Selecciona un proyecto</h2>
    const [project] = currentProject

    // console.log(currentProject);

    const tasks = [
        {name: 'Elegir Plataforma', done: true},
        {name: 'Elegir Colores', done: true},
        {name: 'Elegir Plataformas de pago', done: false},
    ]

    return (
        <Fragment>    
            <h2>Proyecto: {project.name}</h2>
            <ul className='tasks-list'>
                {tasks.length === 0 
                    ? <li className='task'><p>Este proyecto no tiene tareas</p></li> 
                    : tasks.map(task=><Task task={task} key={task.name}/>)
                }
            </ul>
            <button
                type='button'
                className='btn btn-delete'
                onClick={()=>{deleteProject(project.id)}}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default TasksList;
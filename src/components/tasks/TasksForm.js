import React, { Fragment, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const TasksForm = () => {
    const projectsContext = useContext(projectContext)
    const { currentProject } = projectsContext;
    if(!currentProject)return null

    const [project] = currentProject

    return (
        <div className='custom-form'>   
            <form>
                <div className='container-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la nueva tarea'
                        name='name'

                    />
                </div>
                <div className='container-input'>
                    <input
                        type='submit'
                        className='btn btn-primary btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
    );
};

export default TasksForm;
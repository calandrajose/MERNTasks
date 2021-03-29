import React from 'react';

const Task = ({task}) => {
    return (
        <li className='task shadow'>
            <p>{task.name}</p>
            <div className='status'>
                {task.done
                    ?
                        (
                            <button
                                type='button'
                                className='complete'
                            >Completo</button>
                        )
                    :
                        (
                            <button
                                type='button'
                                className='uncomplete'
                            >Incompleto</button>
                        )
                }
            </div>
            <div className='actions'>
                <button
                    type='button'
                    className='btn btn-primary'
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secondary'
                >Eliminar</button>
            </div>
        </li>
    );
};

export default Task;
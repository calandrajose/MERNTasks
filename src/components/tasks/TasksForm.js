import React from 'react';

const TasksForm = () => {
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
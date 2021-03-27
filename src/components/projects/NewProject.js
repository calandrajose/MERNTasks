import React, { Fragment, useState } from 'react';

const NewProject = () => {
    const [create, setCreate] = useState(false);
    const [project, setProject] = useState({
        name:''
    });

    const {name} = project

    const onChangeProject = (e)=>{
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onClickHandler = e =>{
        setCreate(true);
    }

    const onSsubmitHandler = e =>{
        e.preventDefault()
        setCreate(false);
        
    }

    return (
        <Fragment>
            <button
                onClick={onClickHandler}
                type='button'
                className='btn btn-block btn-primary'
            >Nuevo Proyecto</button>
            {create ? 
            <form onSubmit={onSsubmitHandler} className='new-project-form'>
                <input
                    type='text'
                    className='input-text'
                    placeholder='Nombre del Proyecto'
                    name='name'
                    value={name}
                    onChange={onChangeProject}
                />
                <input
                    type='submit'
                    className='btn btn-primary btn-block'
                    value='Agregar Proyecto'
                />
            </form> :
            null}
        </Fragment>
    );
};

export default NewProject;
import React, { Fragment, useState, useContext, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext)
    const {form, formError, showForm, addProject, showError} = projectsContext;
    // let projectsNames = []
    const [project, setProject] = useState({
        name:''
    });

    const {name} = project

    // useEffect(() => {
    //     projectsNames = projects.map(project=>project.name)
    // }, [projects])

    const onChangeProject = (e)=>{
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onClickHandler = e =>{
        showForm()
    }


    const onSubmitHandler = e =>{
        e.preventDefault();
        
        if(name === ''){
            showError('El nombre del Proyecto es obligatorio')
            return
        }

        // // console.log(projects.map(project=>project.name));
        // projects.map(project=>project.name).forEach(newName => {
        //     if(newName == name){
        //         // console.log(newName === name);
        //         showError('Ya existe un proyecto con ese nombre')
        //         // return
        //     }
        // });
        
        
        addProject(project)

        //clean form fields
        setProject({name: ''})
        
    }

    return (
        <Fragment>
            <button
                onClick={onClickHandler}
                type='button'
                className='btn btn-block btn-primary'
            >Nuevo Proyecto</button>
            {form ? 
            <form onSubmit={onSubmitHandler} className='new-project-form'>
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
            {formError ? <p className='message error'>El nombre es obligatorio</p> : null}
        </Fragment>
    );
};

export default NewProject;
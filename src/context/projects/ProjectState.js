import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import {PROJECT_FORM,
        GET_PROJECTS,
        ADD_PROJECT, 
        VALIDATE_FORM, 
        CURRENT_PROJECT, 
        DELETE_PROJECT} from '../../types' 

const ProjectState = props => {
    const initialState = {
        projects : [
            {id:uuidv4(), name: 'tienda virtual'},
            {id:uuidv4(), name: 'Intranet'},
            {id:uuidv4(), name: 'Diseño de sitio web'},
        ],
        form: false,
        error: false,
        errorMessage: '',
        currentProject: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showError = (message)=>{
        console.log('entro');
        dispatch({
            type: VALIDATE_FORM,
            payload: message
        })
    }

   //CRUD Functions
    const showForm = ()=>{
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = ()=>{
        dispatch({
            type: GET_PROJECTS,
            payload: state.projects
        })
    }

    const addProject = (project)=>{
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const deleteProject = (projectId)=>{
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    //Seleccionar proyecto clickeado
    const getCurrentProject = (projectId)=>{
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.error,
                currentProject: state.currentProject,
                showForm,
                getProjects,
                addProject,
                showError,
                getCurrentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
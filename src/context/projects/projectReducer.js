import {PROJECT_FORM,VALIDATE_FORM, GET_PROJECTS, ADD_PROJECT, CURRENT_PROJECT, DELETE_PROJECT } from '../../types' 

export default (state, action) =>{
    switch (action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true
            }
        case VALIDATE_FORM:
            return {
                ...state,
                error: true,
                errorMessage: action.payload   
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                error: false   
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                currentProject: state.projects.filter(project=> project.id === action.payload)   
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project=> project.id !== action.payload),
                currentProject: null   
            }
        default:
            return state;
    }
}
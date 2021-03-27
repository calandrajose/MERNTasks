import React from 'react';
import Project from './Project'

const ProjectsList = () => {
    const projects = [
        {name: 'tienda virtual'},
        {name: 'Intranet'},
        {name: 'Diseño de sitio web'},
    ]

    return (
        <ul className='projects-list'>
            {projects.map(project=>(
                <Project project={project} key={project.name}/>
            ))}
        </ul>
    );
};

export default ProjectsList;
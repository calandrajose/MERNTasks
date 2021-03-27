import React from 'react';
import Sidebar from '../layout/Sidebar'
import Bar from '../layout/Bar'
import TasksForm from '../tasks/TasksForm'
import TasksList from '../tasks/TasksList'

const Projects = () => {
    return (
        <div className='app-container' >
                <Sidebar/>
            <div className='main-section'>
                <Bar/>
                <main>
                    <TasksForm/>
                    <div className='tasks-container'>
                        <TasksList/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;
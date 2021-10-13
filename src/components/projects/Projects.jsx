import React from 'react';
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
const Projects = () => {
  return (
    <div className='container-app'>
      <Sidebar />
      <div
        className='section-principal
'
      >
        <NavBar />
        <main>
          <FormTask />
          <div className='container-tasks'>
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {
  // Extraer proyectos del state inicial
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();

    // eslint-disable-next-line
  }, []);

  // Verificar que proyectos tenga contenido
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <>
      <ul className='list-projects'>
        <TransitionGroup>
          {projects.map((project) => (
            <CSSTransition key={project.id} timeout={200} classNames='task'>
              <Project project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </>
  );
};

export default ListProjects;

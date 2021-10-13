import React, { useReducer } from 'react';

import ProjectContext from './projectContext';
import projectReducer from './projectReducer';
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  PROJECT_CURRENT,
  DELETE_PROJECT,
} from '../../types';
import { v4 as uuidv4 } from 'uuid';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Tienda virtual' },
    { id: 2, name: 'Intranet Virtual' },
    { id: 3, name: 'CRUD' },
    { id: 4, name: 'Ecommerce' },
  ];

  const initialState = {
    projects: [],
    addprojectform: false,
    errorform: false,
    project: null,
  };

  // Dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Funciones del CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Obtener los proyectos
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Agregar nuevo proyecto
  const addProject = (project) => {
    project.id = uuidv4();
    // Insertar proyecto en el state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validar formulario
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  // Seleccionar proyecto
  const projectCurrent = (projectId) => {
    dispatch({
      type: PROJECT_CURRENT,
      payload: projectId,
    });
  };

  // Eliminar proyecto
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        addprojectform: state.addprojectform,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        projectCurrent,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;

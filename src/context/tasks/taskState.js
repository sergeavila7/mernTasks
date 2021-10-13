import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';

import {
  ADD_TASK,
  TASKS_PROJECT,
  VERIFY_TASK,
  DELETE_TASK,
  STATE_TASK,
  TASK_CURRENT,
  UPDATE_TASK,
} from '../../types';

const TaskState = (props) => {
  const initalState = {
    tasks: [
      { id: 1, name: 'Eleir so', state: true, projectId: 1 },
      { id: 2, name: 'Elegir fonfo', state: false, projectId: 2 },
      { id: 3, name: 'Elegir fonfo', state: false, projectId: 3 },
      { id: 4, name: 'Eleir so', state: true, projectId: 1 },
      { id: 5, name: 'Elegir fonfo', state: false, projectId: 2 },
      { id: 6, name: 'Elegir fonfo', state: false, projectId: 4 },
      { id: 7, name: 'Eleir so', state: true, projectId: 1 },
      { id: 8, name: 'Elegir fonfo', state: false, projectId: 2 },
      { id: 9, name: 'Elegir fonfo', state: false, projectId: 4 },
      { id: 10, name: 'Eleir so', state: true, projectId: 1 },
      { id: 11, name: 'Elegir fonfo', state: false, projectId: 2 },
      { id: 12, name: 'Elegir fonfo', state: false, projectId: 3 },
    ],
    tasksproject: null,
    errortask: false,
    taskcurrent: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TaskReducer, initalState);

  // Crear las tareas del proyecto
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  // Agregar tarea al proyecto seleccionado
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // Valida y muestra un error en caso de ser necesario
  const verifyTask = () => {
    dispatch({
      type: VERIFY_TASK,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  // Cambiar el state de las tareas
  const changeStateTask = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task,
    });
  };

  // Extraer tarea para editar
  const saveTaskCurrent = (task) => {
    dispatch({
      type: TASK_CURRENT,
      payload: task,
    });
  };

  // Editar tarea
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        taskcurrent: state.taskcurrent,
        getTasks,
        addTask,
        verifyTask,
        deleteTask,
        changeStateTask,
        saveTaskCurrent,
        updateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;

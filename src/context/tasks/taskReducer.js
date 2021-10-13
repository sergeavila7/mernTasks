import {
  TASKS_PROJECT,
  ADD_TASK,
  VERIFY_TASK,
  DELETE_TASK,
  STATE_TASK,
  TASK_CURRENT,
  UPDATE_TASK,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errortask: false,
      };

    case VERIFY_TASK:
      return {
        ...state,
        errortask: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        taskcurrent: null,
      };

    case TASK_CURRENT:
      return {
        ...state,
        taskcurrent: action.payload,
      };

    default:
      return state;
  }
};

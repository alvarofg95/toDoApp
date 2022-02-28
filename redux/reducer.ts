import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  SELECT_TASK_FAILURE,
  SELECT_TASK_REQUEST,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
} from './actionTypes';

type TaskProps = {
  id: string;
  text: string;
  done: boolean;
};

const INITIAL_STATE = {
  toDo: <TaskProps>(<unknown>[]),
  pending: false,
  error: null,
};

type ActionType = {
  type: string;
  payload: any;
};

const tasksReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {...state, pending: true};
    case FETCH_TASKS_FAILURE:
      return {...state, pending: false, error: 'Error al cargar las tareas'};
    case FETCH_TASKS_SUCCESS:
      return {...state, pending: false, toDo: action.payload};
    case CREATE_TASK_REQUEST:
      return {...state, pending: true};
    case CREATE_TASK_FAILURE:
      return {...state, pending: false, error: 'Error al añadir la tarea'};
    case SELECT_TASK_REQUEST:
      return {...state, pending: true};
    case SELECT_TASK_FAILURE:
      return {
        ...state,
        pending: false,
        error: 'Error al cambiar el estado de la tarea',
      };
    case DELETE_TASK_REQUEST:
      return {...state, pending: true};
    case DELETE_TASK_FAILURE:
      return {...state, pending: false, error: 'Error al eliminar la tarea'};
    default:
      return state;
  }
};

export default tasksReducer;

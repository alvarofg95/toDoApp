import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_REQUEST,
  CREATE_TASK_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_REQUEST,
  SELECT_TASK_REQUEST,
  SELECT_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_FAILURE,
  TaskType,
} from './actionTypes';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (payload: Array<TaskType>) => ({
  type: FETCH_TASKS_SUCCESS,
  payload,
});

export const fetchTasksFailure = () => ({
  type: FETCH_TASKS_FAILURE,
});

export const createTaskRequest = (payload: string) => ({
  type: CREATE_TASK_REQUEST,
  payload,
});

export const createTaskSuccess = () => ({
  type: CREATE_TASK_SUCCESS,
});

export const createTaskFailure = () => ({
  type: CREATE_TASK_FAILURE,
});

export const selectTaskRequest = (payload: string) => ({
  type: SELECT_TASK_REQUEST,
  payload,
});

export const selectTaskFailure = () => ({
  type: SELECT_TASK_FAILURE,
});

export const deleteTaskRequest = (payload: string) => ({
  type: DELETE_TASK_REQUEST,
  payload,
});

export const deleteTaskFailure = () => ({
  type: DELETE_TASK_FAILURE,
});

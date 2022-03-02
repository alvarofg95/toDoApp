export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const SELECT_TASK_REQUEST = 'SELECT_TASK_REQUEST';
export const SELECT_TASK_FAILURE = 'SELECT_TASK_FAILURE';
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export type TaskType = {
  id: string;
  text: string;
  done?: boolean;
};

export type CheckTaskProps = {
  taskId: string;
  taskList: Array<TaskType>;
};

export type CreateTaskProps = {
  taskInfo: string;
  taskList: Array<TaskType>;
};

export type CreateTaskSagaProps = {
  payload: string;
};

export type ResponseType = {
  success: boolean;
  value: Array<TaskType>;
};

export type ActionType = {
  type: string;
  payload: any;
};

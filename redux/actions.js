export const LOAD_TASKS = () => ({
  type: 'LOAD_TASKS',
});

export const ADD_TASK = task => ({
  type: 'ADD_TASK',
  payload: task,
});

export const CHECK_TASK = id => ({
  type: 'CHECK_TASK',
  payload: id,
});

export const UNCHECK_TASK = id => ({
  type: 'UNCHECK_TASK',
  payload: id,
});

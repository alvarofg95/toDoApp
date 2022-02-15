import {all, call, put, takeLatest, select, takeEvery} from 'redux-saga/effects';
import {
  fetchTasksFailure,
  fetchTasksSuccess,
  createTaskSuccess,
  createTaskFailure,
  fetchTasksRequest,
  selectTaskFailure,
} from './actions';
import {
  FETCH_TASKS_REQUEST,
  CREATE_TASK_REQUEST,
  SELECT_TASK_REQUEST,
  TaskType,
} from './actionTypes';
import Storage from '../utils/storage';

const getToDoList = () => {
  return Storage.getData();
};

type ResponseType = {
  success: boolean;
  value: Array<TaskType>;
};

function* fetchTasksSaga() {
  try {
    const response: ResponseType = yield call(getToDoList);
    console.log({response});
    if (response.success) {
      yield put(fetchTasksSuccess(response.value));
    } else {
      yield put(fetchTasksFailure());
    }
  } catch (e) {
    yield put(fetchTasksFailure());
  }
}

type createTaskProps = {
  taskInfo: string;
  taskList: Array<TaskType>;
};

const createTask = ({taskInfo, taskList}: createTaskProps) => {
  return Storage.setData(taskInfo, taskList);
};

type CreateTaskSagaProps = {
  payload: string;
};

function* createTaskSaga({payload: taskInfo}: CreateTaskSagaProps) {
  try {
    const taskList: TaskType[] = yield select(state => state.tasks.toDo);
    const response: ResponseType = yield call(createTask, {taskInfo, taskList});
    if (response.success) {
      yield put(createTaskSuccess());
    } else {
      yield put(createTaskFailure());
    }
    yield put(fetchTasksRequest());
  } catch (e) {
    yield put(createTaskFailure());
  }
}

type CheckTaskProps = {
  taskId: string;
  taskList: Array<TaskType>;
};

const checkTask = ({taskId, taskList}: CheckTaskProps) => {
  return Storage.checkTask(taskId, taskList);
};

type selectTaskProps = {
  payload: string;
};

function* selectTaskSaga({payload: taskId}: selectTaskProps) {
  try {
    const taskList: Array<TaskType> = yield select(state => state.tasks.toDo);
    const response: ResponseType = yield call(checkTask, {
      taskId,
      taskList,
    });
    if (!response.success) {
      yield put(selectTaskFailure());
    }
    yield put(fetchTasksRequest());
  } catch (e) {
    yield put(createTaskFailure());
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* tasksSaga() {
  yield all([
    takeEvery(FETCH_TASKS_REQUEST, fetchTasksSaga),
    takeEvery(CREATE_TASK_REQUEST, createTaskSaga),
    takeEvery(SELECT_TASK_REQUEST, selectTaskSaga),
  ]);
}

export default tasksSaga;

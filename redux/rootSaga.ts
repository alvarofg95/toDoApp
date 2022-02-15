import {all, fork} from 'redux-saga/effects';

import tasksSaga from './sagas';

export function* rootSaga() {
  yield all([fork(tasksSaga)]);
}

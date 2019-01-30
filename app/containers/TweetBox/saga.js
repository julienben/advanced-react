import { call, takeLatest } from 'redux-saga/effects';

function* togglePhoto(action) {
  try {
    yield call(console.log, action);
  } catch (e) {
    yield call(console.log, e);
  }
}

function* defaultSaga() {
  yield takeLatest('TOGGLE_PHOTO', togglePhoto);
}

export default defaultSaga;

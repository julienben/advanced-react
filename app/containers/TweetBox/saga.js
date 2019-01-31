import { call, takeLatest } from 'redux-saga/effects';
import { TOGGLE_PHOTO } from './constants';

function* togglePhoto(action) {
  try {
    yield call(console.log, action);
  } catch (e) {
    yield call(console.log, e);
  }
}

function* defaultSaga() {
  yield takeLatest(TOGGLE_PHOTO, togglePhoto);
}

export default defaultSaga;

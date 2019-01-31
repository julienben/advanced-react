import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/network';

import { fetchReposSuccess, fetchReposError } from './actions';
import { FETCH_REPOS } from './constants';

export function* fetchRepos({ username = '' }) {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchReposSuccess(response));
  } catch (err) {
    yield put(fetchReposError());
  }
}

export default function* rootSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  yield takeLatest(FETCH_REPOS, fetchRepos);
}

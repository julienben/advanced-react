import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
} from './constants';

export function fetchRepos(username) {
  return {
    type: FETCH_REPOS,
    username,
  };
}

export function fetchReposSuccess(repos) {
  return {
    type: FETCH_REPOS_SUCCESS,
    repos,
  };
}

export function fetchReposError() {
  return {
    type: FETCH_REPOS_ERROR,
  };
}

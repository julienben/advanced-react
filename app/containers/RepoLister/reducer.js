import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_ERROR,
} from './constants';

export const initialState = {
  repos: [],
  loading: false,
  error: false,
};

function reposReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCH_REPOS:
      return Object.assign(newState, {
        loading: true,
        error: false,
      });
    case FETCH_REPOS_SUCCESS:
      return Object.assign(newState, {
        loading: false,
        error: false,
        repos: action.repos,
      });
    case FETCH_REPOS_ERROR:
      return Object.assign(newState, {
        loading: false,
        error: true,
      });
    default:
      return state;
  }
}

export default reposReducer;

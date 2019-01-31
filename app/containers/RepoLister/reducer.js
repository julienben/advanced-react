import produce from 'immer';
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

/* eslint-disable default-case, no-param-reassign */
const reposReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_REPOS:
        draft.loading = true;
        draft.error = false;
        break;

      case FETCH_REPOS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.repos = action.repos;
        break;

      case FETCH_REPOS_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default reposReducer;

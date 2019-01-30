import { combineReducers } from 'redux';

export default function createReducer(injectedReducers = {}) {
  let blank = {};
  if (Object.keys(injectedReducers).length === 0) blank = (state = {}) => state;

  const rootReducer = combineReducers({
    blank,
    ...injectedReducers,
  });

  return rootReducer;
}

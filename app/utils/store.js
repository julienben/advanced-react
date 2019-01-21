import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configureStore(initialState = {}) {
  const enhancers = [applyMiddleware()];
  return createStore(rootReducer, initialState, composeEnhancers(...enhancers));
}

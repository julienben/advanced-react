import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedSagas = {};
  store.injectedReducers = {};

  return store;
}

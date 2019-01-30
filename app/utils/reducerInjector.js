import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';
import createReducer from './reducers';

export default ({ key, reducer }) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props, context) {
      super(props, context);

      const { store } = context;

      store.injectedReducers[key] = reducer;
      const rootReducer = createReducer(store.injectedReducers);
      store.replaceReducer(rootReducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

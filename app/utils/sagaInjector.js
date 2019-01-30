import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

export default ({ key, saga }) => WrappedComponent => {
  class SagaInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    componentWillMount() {
      const { store } = this.context;
      if (store.injectedSagas[key]) return;

      store.injectedSagas[key] = true;
      store.runSaga(saga);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(SagaInjector, WrappedComponent);
};

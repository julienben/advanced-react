import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/sagaInjector';
import injectReducer from 'utils/reducerInjector';
import debounce from 'utils/debounce';
import { fetchRepos } from './actions';
import reducer, { initialState } from './reducer';
import saga from './saga';

class RepoLister extends React.Component {
  state = { username: '' };

  onChange = e => {
    this.setState({ username: e.target.value }, this.debouncedFetchRepos);
  };

  dispatchFetchRepos = () => {
    this.props.dispatch(fetchRepos(this.state.username));
  };

  debouncedFetchRepos = debounce(this.dispatchFetchRepos, 500);

  render() {
    const { loading, repos, error } = this.props;
    return (
      <div>
        <div>RepoList</div>
        <input value={this.state.username} onChange={this.onChange} />
        {loading && <div>Data is loading! Please wait.</div>}
        {error && <div>Network error. Please try again later.</div>}
        <ul>
          {!loading &&
            !error &&
            repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
        </ul>
      </div>
    );
  }
}

RepoLister.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const key = 'repos';

const mapStateToProps = store => store[key] || initialState;

const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(withSaga(withReducer(RepoLister)));

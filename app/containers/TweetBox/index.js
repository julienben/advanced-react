import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/sagaInjector';
import injectReducer from 'utils/reducerInjector';
import TextArea from 'components/TextArea';
import OverflowAlert from 'components/OverflowAlert';
import { updateTweet, togglePhoto } from './actions';
import reducer, { initialState } from './reducer';
import saga from './saga';

class TweetBox extends React.Component {
  handleChange = e => {
    this.props.dispatch(updateTweet(e.target.value));
  };

  togglePhoto = () => {
    this.props.dispatch(togglePhoto());
  };

  render() {
    const isTweetButtonDisabled =
      this.props.text.length === 0 && !this.props.photoAdded;

    return (
      <div className="card bg-light">
        <div className="card-body text-right">
          <OverflowAlert
            overflowText={this.props.overflowText}
            beforeOverflowText={this.props.beforeOverflowText}
          />
          <TextArea value={this.props.text} onChange={this.handleChange} />
          <br />
          <span>{this.props.remainingChars}</span>{' '}
          <button
            type="button"
            className="btn btn-primary"
            disabled={isTweetButtonDisabled}
          >
            Tweet Yoself
          </button>{' '}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.togglePhoto}
          >
            {this.props.photoAdded ? '✓ Photo Added' : 'Add Photo'}
          </button>
        </div>
      </div>
    );
  }
}

TweetBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  photoAdded: PropTypes.bool.isRequired,
  remainingChars: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  overflowText: PropTypes.string.isRequired,
  beforeOverflowText: PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const key = 'tweetBox';

const mapStateToProps = store => store[key] || initialState;

const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(withSaga(withReducer(TweetBox)));

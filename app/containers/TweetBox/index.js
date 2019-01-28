import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextArea from '../../components/TextArea';
import { updateTweet, togglePhoto } from './actions';

class TweetBox extends React.Component {
  handleChange = e => {
    this.props.dispatch(updateTweet(e.target.value));
  };

  togglePhoto = () => {
    this.props.dispatch(togglePhoto());
  };

  renderOverflowAlert = () => {
    // TODO: Move the actual overflowText calculation to Redux
    // TODO: Move the OverflowAlert to its own component
    // TODO: Remove this method and replace it with a ternary inside render()
    if (this.props.remainingChars < 0) {
      const imageLength = this.props.photoAdded ? 23 : 0;
      const beforeOverflowText = this.props.text.substring(
        280 - imageLength - 10,
        280 - imageLength,
      );
      const overflowText = this.props.text.substring(280 - imageLength);

      return (
        <div className="alert alert-warning text-left">
          <strong>Oops! Too Long:</strong>
          &nbsp; &#8230;
          {beforeOverflowText}
          <strong className="bg-danger text-light">{overflowText}</strong>
        </div>
      );
    }
    return '';
  };

  render() {
    const isTweetButtonDisabled =
      this.props.text.length === 0 && !this.props.photoAdded;

    return (
      <div className="card bg-light">
        <div className="card-body text-right">
          {this.renderOverflowAlert()}
          <TextArea value={this.props.text} onChange={this.handleChange} />
          <br />
          <span>{this.props.remainingChars}</span>

          <button
            type="button"
            className="btn btn-primary"
            disabled={isTweetButtonDisabled}
          >
            Tweet Yoself
          </button>

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
};

const mapStateToProps = store => store.home;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetBox);

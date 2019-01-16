import React from 'react';
import ReactDOM from 'react-dom';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      photoAdded: false,
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  togglePhoto = () => {
    this.setState(prevState => ({ photoAdded: !prevState.photoAdded }));
  };

  getRemainingChars = () => {
    let chars = 280 - this.state.text.length;
    if (this.state.photoAdded) chars -= 23;
    return chars;
  };

  renderOverflowAlert = () => {
    if (this.getRemainingChars() < 0) {
      const imageLength = this.state.photoAdded ? 23 : 0;
      const beforeOverflowText = this.state.text.substring(
        280 - imageLength - 10,
        280 - imageLength,
      );
      const overflowText = this.state.text.substring(280 - imageLength);

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
      this.state.text.length === 0 && !this.state.photoAdded;

    return (
      <div className="card bg-light">
        <div className="card-body text-right">
          {this.renderOverflowAlert()}
          <textarea className="form-control" onChange={this.handleChange} />
          <br />
          <span>{this.getRemainingChars()}</span>

          <button className="btn btn-primary" disabled={isTweetButtonDisabled}>
            Tweet
          </button>

          <button className="btn btn-secondary" onClick={this.togglePhoto}>
            {this.state.photoAdded ? '✓ Photo Added' : 'Add Photo'}
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TweetBox />, document.getElementById('app'));

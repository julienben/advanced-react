import React from 'react';
import throttle from 'lodash/throttle';
import Option from './Option';
import classes from './index.scss';

/* eslint-disable */

class Select2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      highlightedIndex: props.options.findIndex(
        option => option.value === props.value,
      ),
    };
  }

  ref = null;

  componentDidMount() {
    window.addEventListener('click', this.hideOptionsOnClickAway, true);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideOptionsOnClickAway, true)
  }

  toggleVisibility = () =>
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));

  hideOptionsOnClickAway = e => {
    if (!this.ref.contains(e.target)) this.setState({ visible: false });
  };

  handleMoveIndexBy = (by) =>
    this.setState(prevState => {
      const { length } = this.props.options;
      return { highlightedIndex: (length + prevState.highlightedIndex + by) % length };
    });


  handleDownKey = () => this.handleMoveIndexBy(1)
  handleUpKey = () => this.handleMoveIndexBy(-1)

  throttledHandleUpKey = throttle(this.handleUpKey, 200)
  throttledHandleDownKey = throttle(this.handleDownKey, 200)

  handleKeyboardEvents = e => {
    const key = e.which;
    switch (key) {
      case 38: // Up
        if (this.state.visible) this.throttledHandleUpKey();
        else this.toggleVisibility();
        break;
      case 40: // Down
        if (this.state.visible) this.throttledHandleDownKey();
        else this.toggleVisibility();
        break;
      case 13: // Return
        if (this.state.visible) {
          this.props.onChange(
            { target: { value: this.props.options[this.state.highlightedIndex].value } }
          );
          this.setState({ visible: false });
        }
        break;
    }
  };

  highlightOption = (i) =>
    this.setState({ highlightedIndex: i });

  render() {
    return (
      <div
        ref={el => (this.ref = el)}
        onClick={this.toggleVisibility}
        className={classes.select}
        tabIndex={0}
        onKeyDown={this.handleKeyboardEvents}
      >
        <div>{this.props.value}</div>
        {this.state.visible && (
          <ul className={classes.options}>
            {this.props.options.map((option, i) => (
              <Option
                highlighted={i === this.state.highlightedIndex}
                selected={option.value === this.props.value}
                key={i}
                value={option.value}
                onChange={this.props.onChange}
                index={i}
                highlightOption={this.highlightOption}
              >
                {option.name}
              </Option>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export { Option };
export default Select2;

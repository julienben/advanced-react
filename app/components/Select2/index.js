import React from 'react';
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
    window.addEventListener('keydown', this.handleKeyboardEvents, true);
  }

  toggleVisibility = () =>
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));

  hideOptionsOnClickAway = e => {
    if (!this.ref.contains(e.target)) this.setState({ visible: false });
  };

  handleKeyboardEvents = e => {
    const key = e.which;
    switch (true) {
      case key === 38: // Up
        if (this.state.visible)
          this.setState(prevState => {
            let next;
            if (prevState.highlightedIndex === 0)
              next = this.props.options.length - 1;
            else next = prevState.highlightedIndex - 1;
            return { highlightedIndex: next };
          });
        break;
      case key === 40: // Down
        if (this.state.visible)
          this.setState(prevState => {
            let next;
            if (prevState.highlightedIndex === this.props.options.length - 1)
              next = 0;
            else next = prevState.highlightedIndex + 1;
            return { highlightedIndex: next };
          });
        break;
    }
  };

  render() {
    return (
      <div
        ref={el => (this.ref = el)}
        onClick={this.toggleVisibility}
        className={classes.select}
      >
        <div>{this.props.value}</div>
        {this.state.visible && (
          <ul className={classes.options}>
            {this.props.options.map((option, i) => (
              <Option
                highlighted={i === this.state.highlightedIndex}
                key={i}
                value={option.value}
                onChange={this.props.onChange}
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

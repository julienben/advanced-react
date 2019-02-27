import React from 'react';
import cc from 'classcat';
import classes from './index.scss';

/* eslint-disable */

class Option extends React.Component {
  onChange = () => {
    const e = { target: { value: this.props.value } };
    this.props.onChange(e);
  };

  highlightMe = () => {
    this.props.highlightOption(this.props.index)
  }

  render() {
    return (
      <li
        className={cc({
          [classes.highlighted]: this.props.highlighted,
          [classes.selected]: this.props.selected,
        })}
        onMouseEnter={this.highlightMe}
        onClick={this.onChange}
      >
        {this.props.children}
      </li>
    );
  }
}

export default Option;

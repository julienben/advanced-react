import React from 'react';
import classes from './index.scss';

/* eslint-disable */

class Option extends React.Component {
  onChange = () => {
    const e = { target: { value: this.props.value } };
    this.props.onChange(e);
  };

  render() {
    return (
      <li
        className={this.props.highlighted ? classes.highlighted : ''}
        onClick={this.onChange}
      >
        {this.props.children}
      </li>
    );
  }
}

export default Option;

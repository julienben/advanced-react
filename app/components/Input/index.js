import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.scss';

const Input = ({ onChange, value }) => (
  <input className={classes.input} onChange={onChange} value={value} />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

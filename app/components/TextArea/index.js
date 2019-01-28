import React from 'react';
import PropTypes from 'prop-types';
// import classes from './index.scss';

const TextArea = ({ onChange, value }) => (
  <textarea value={value} className="form-control" onChange={onChange} />
);

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;

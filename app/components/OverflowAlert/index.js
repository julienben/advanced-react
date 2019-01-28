import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import classes from './index.scss';

const OverflowAlert = ({ overflowText, beforeOverflowText }) => {
  if (!overflowText) return null;

  return (
    <div className={cc([classes.alert, 'alert', 'alert-warning', 'text-left'])}>
      <strong>Oops! Too Long:</strong>
      &nbsp; &#8230;
      {beforeOverflowText}
      <strong className="bg-danger text-light">{overflowText}</strong>
    </div>
  );
};

OverflowAlert.propTypes = {
  overflowText: PropTypes.string.isRequired,
  beforeOverflowText: PropTypes.string.isRequired,
};

export default OverflowAlert;

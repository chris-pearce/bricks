import React from 'react';
import propTypes from 'prop-types';

const Spacing = ({ children, isUpwards, size, ...props }) => (
  <div {...props} style={{ [isUpwards ? 'marginTop' : 'marginBottom']: size }}>
    {children}
  </div>
);

Spacing.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string.isRequired,
  isUpwards: propTypes.bool,
};

Spacing.defaultProps = {
  isUpwards: false,
};

export default Spacing;

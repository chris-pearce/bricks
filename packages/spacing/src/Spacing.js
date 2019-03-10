import React from 'react';
import propTypes from 'prop-types';

const Spacing = ({ children, isInline }) => {
  const Tag = isInline ? 'span' : 'div';

  return <Tag>{children}</Tag>;
};

Spacing.propTypes = {
  children: propTypes.node.isRequired,
  isInline: propTypes.bool,
};

Spacing.defaultProps = {
  isInline: false,
};

export default Spacing;

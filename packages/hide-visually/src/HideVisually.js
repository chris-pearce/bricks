import React from 'react';
import propTypes from 'prop-types';

const HideVisually = ({ children, isInline }) => {
  const Tag = isInline ? 'span' : 'div';

  return <Tag className="bricks-hide-visually-root">{children}</Tag>;
};

HideVisually.propTypes = {
  children: propTypes.node.isRequired,
  isInline: propTypes.bool,
};

HideVisually.defaultProps = {
  isInline: false,
};

export default HideVisually;

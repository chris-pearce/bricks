import React from 'react';
import propTypes from 'prop-types';

const HideVisually = ({ children, isInline, ...props }) => {
  const Tag = isInline ? 'span' : 'div';

  return (
    <Tag {...props} className="bricks-hide-visually">
      {children}
    </Tag>
  );
};

HideVisually.propTypes = {
  children: propTypes.node.isRequired,
  isInline: propTypes.bool,
};

HideVisually.defaultProps = {
  isInline: false,
};

export default HideVisually;

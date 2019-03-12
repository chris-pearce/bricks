import React from 'react';
import propTypes from 'prop-types';
import { Spacing as SpacingBricks } from '../../../packages/spacing/src';
import tokens from '../../constants/tokens';

const Spacing = ({ children, size }) => (
  <SpacingBricks size={tokens.spacing[size]}>{children}</SpacingBricks>
);

Spacing.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.shape(tokens.spacing),
};

Spacing.defaultProps = {
  size: tokens.spacing.default,
};

export default Spacing;

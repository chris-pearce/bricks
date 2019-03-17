import React from 'react';
import propTypes from 'prop-types';
import { TokensConsumer } from '@bricks/tokens-provider';
import { getKeyFromValue } from '@bricks/utils';

const Spacing = ({ children, isUpwards, size, ...props }) => (
  <TokensConsumer>
    {tokens => (
      <div
        {...props}
        className={tokens && `bricks-spacing-${getKeyFromValue(size, tokens)}`}
        style={
          !tokens ? { [isUpwards ? 'marginTop' : 'marginBottom']: size } : null
        }
      >
        {children}
      </div>
    )}
  </TokensConsumer>
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

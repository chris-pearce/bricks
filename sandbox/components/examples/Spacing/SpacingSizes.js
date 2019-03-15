import React from 'react';
import propTypes from 'prop-types';
import tokens from 'sandbox/constants/tokens';
import { Heading, Spacing as SpacingSandbox } from 'sandbox/components';
import { Spacing } from 'packages/spacing/src';
import './SpacingSizes.css';

const SpacingSizes = ({ isUpwards }) => (
  <ul>
    {Object.keys(tokens.spacing).map(item => {
      const unit = tokens.spacing[item];

      return (
        <li className="sandbox-spacing-sizes" key={item}>
          <SpacingSandbox size="small2x">
            <Heading>
              <>
                {item} <span>({unit})</span>
              </>
            </Heading>
          </SpacingSandbox>
          <div className="sandbox-spacing-sizes__indicator">
            <Spacing isUpwards={isUpwards} size={unit}>
              <div />
            </Spacing>
          </div>
        </li>
      );
    })}
  </ul>
);

SpacingSizes.propTypes = {
  isUpwards: propTypes.bool,
};

SpacingSizes.defaultProps = {
  isUpwards: false,
};

export default SpacingSizes;

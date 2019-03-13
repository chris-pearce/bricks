import React from 'react';
import propTypes from 'prop-types';
import { Spacing } from '../../../../packages/spacing';
import tokens from '../../../constants/tokens';
import { Heading, Spacing as SpacingStorybook } from '../../index';
import './SpacingSizes.css';

const SpacingSizes = ({ isUpwards }) => (
  <ul>
    {Object.keys(tokens.spacing).map(item => {
      const unit = tokens.spacing[item];

      return (
        <li className="storybook-example-spacing" key={item}>
          <SpacingStorybook size="small2x">
            <Heading>
              <>
                {item} <span>({unit})</span>
              </>
            </Heading>
          </SpacingStorybook>
          <div className="storybook-example-spacing__indicator">
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

import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacing from './Spacing';
import {
  Heading,
  Spacing as SpacingStorybook,
} from '../../../.storybook/components';
import tokens from '../../../.storybook/constants/tokens';

storiesOf('Components/Spacing', module).add('Sizes', () => (
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
            <Spacing size={unit}>
              <div />
            </Spacing>
          </div>
        </li>
      );
    })}
  </ul>
));

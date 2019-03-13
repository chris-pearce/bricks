import React from 'react';
import { storiesOf } from '@storybook/react';
import { SpacingSizes } from '../../../.storybook/components';

storiesOf('Components/Spacing', module)
  .add('Sizes (downwards direction)', () => <SpacingSizes />)
  .add('Sizes (upwards direction)', () => <SpacingSizes isUpwards />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { EmojiButton } from 'sandbox/components';

storiesOf('Components/HideVisually', module).add(
  'Button with no text label',
  () => <EmojiButton emoji="🧱" label="Close" />
);

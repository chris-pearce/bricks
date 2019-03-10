import React from 'react';
import { storiesOf } from '@storybook/react';
import HideVisually from './HideVisually';
import './HideVisually.css';

storiesOf('HideVisually', module)
  .add('Default', () => <HideVisually>Assistive text</HideVisually>)
  .add('Inline', () => <HideVisually isInline>Assistive text</HideVisually>)
  .add('Icon button', () => (
    <button className="storybook-icon-button" type="button">
      <HideVisually>Close</HideVisually>
      <span>✗</span>
    </button>
  ));

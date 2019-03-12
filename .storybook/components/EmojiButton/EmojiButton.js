import React from 'react';
import propTypes from 'prop-types';
import { HideVisually } from '../../../packages/hide-visually/src';
import '../../../packages/hide-visually/src/HideVisually.css';
import './EmojiButton.css';

const EmojiButton = ({ label, emoji }) => (
  <button className="storybook-emoji-button" type="button">
    <HideVisually>{label}</HideVisually>
    <span className="storybook-emoji-button__emoji">{emoji}</span>
  </button>
);

EmojiButton.propTypes = {
  emoji: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default EmojiButton;

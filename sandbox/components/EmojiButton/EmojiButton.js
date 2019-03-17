import React from 'react';
import propTypes from 'prop-types';
import { HideVisually } from 'packages/hide-visually';
import 'packages/hide-visually/src/HideVisually.css';
import './EmojiButton.module.css';

const EmojiButton = ({ label, emoji }) => (
  <button className="root" type="button">
    <HideVisually>{label}</HideVisually>
    <span className="emoji">{emoji}</span>
  </button>
);

EmojiButton.propTypes = {
  emoji: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default EmojiButton;

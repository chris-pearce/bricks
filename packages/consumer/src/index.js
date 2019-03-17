import React from 'react';
import ReactDOM from 'react-dom';
import { TokensProvider } from '@bricks/tokens-provider';
import 'backpack.css';
import './assets/styles/index.css';
import tokens from './constants/tokens';
import { App } from './components';

const { spacing } = tokens;

ReactDOM.render(
  <TokensProvider tokens={spacing}>
    <App />
  </TokensProvider>,
  document.getElementById('root')
);

import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import './assets/styles/index.css';

addDecorator(withA11y);

addParameters({
  options: {
    name: '🧱 Bricks',
    showPanel: true,
  },
});

const req = require.context(
  '../packages',
  true,
  /^((?!node_modules).)*\.stories\.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

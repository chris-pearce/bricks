import { addParameters, configure } from '@storybook/react';
import './styles.css';

addParameters({
  options: {
    name: '🧱 Bricks',
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

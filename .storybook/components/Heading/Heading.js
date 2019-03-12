import React from 'react';
import propTypes from 'prop-types';
import './Heading.css';

const Heading = ({ children }) => (
  <h1 className="storybook-heading">{children}</h1>
);

Heading.propTypes = {
  children: propTypes.node.isRequired,
};

export default Heading;

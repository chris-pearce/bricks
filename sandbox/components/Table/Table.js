import React from 'react';
import propTypes from 'prop-types';
import { Heading } from 'sandbox/components';
import './Table.css';

export const TableHead = ({ children }) => <thead>{children}</thead>;

TableHead.propTypes = {
  children: propTypes.node.isRequired,
};

export const TableBody = ({ children }) => <tbody>{children}</tbody>;

TableBody.propTypes = {
  children: propTypes.node.isRequired,
};

export const TableRow = ({ children }) => <tr>{children}</tr>;

TableRow.propTypes = {
  children: propTypes.node.isRequired,
};

export const TableCell = ({ children, type }) => {
  const Tag = `t${type}`;

  return <Tag>{children}</Tag>;
};

TableCell.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.oneOf(['h', 'd']),
};

TableCell.defaultProps = {
  type: 'd',
};

const Table = ({ children, heading }) => (
  <table className="sandbox-table">
    <caption>
      <Heading>{heading}</Heading>
    </caption>
    {children}
  </table>
);

Table.propTypes = {
  children: propTypes.node.isRequired,
  heading: propTypes.string.isRequired,
};

export default Table;

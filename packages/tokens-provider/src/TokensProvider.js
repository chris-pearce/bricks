import React, { Children, createContext } from 'react';
import PropTypes from 'prop-types';

const TokensContext = createContext();
export const TokensConsumer = TokensContext.Consumer;

const TokensProvider = ({ children, tokens }) => {
  return (
    <TokensContext.Provider value={tokens}>
      {Children.only(children)}
    </TokensContext.Provider>
  );
};

TokensProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  tokens: PropTypes.object.isRequired,
};

export default TokensProvider;

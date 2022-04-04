import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../context/ThemeContext';

export function Button({ onClick, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#222',
        background: theme === 'dark' ? '#222' : '#fff',
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

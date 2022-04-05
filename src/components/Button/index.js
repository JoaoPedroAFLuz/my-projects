import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Button({ onClick, children }) {
  return <Container onClick={onClick}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../Button';
import { Title, Subtitle } from './styles';

export function Header({ title, subtitle }) {
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button onClick={handleToggleTheme}>Alterar tema</Button>
      <hr />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

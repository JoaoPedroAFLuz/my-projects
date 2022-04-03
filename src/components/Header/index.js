import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../Button';

export function Header({ title, subtitle }) {
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{title}</h1>
      <span>{subtitle}</span>
      <br />
      <Button onClick={handleToggleTheme}>Alterar tema</Button>
      <hr />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../Button';

export function Footer() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>Contato: joão.pedro.luz@hotmail.com</span>
      <Button onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </Button>
    </Container>
  );
}

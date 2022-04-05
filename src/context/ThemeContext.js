import React, { useState, createContext, useMemo, useEffect } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes from '../styles/themes';

export const ThemeContext = createContext(localStorage.getItem('theme'));

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  });

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

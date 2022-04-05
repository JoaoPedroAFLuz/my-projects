import React, { useState, createContext, useMemo } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes from '../styles/themes';

export const ThemeContext = createContext('dark');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  
  function handleToggleTheme() {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }
  
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
      {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

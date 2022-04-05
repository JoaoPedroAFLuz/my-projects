import React from 'react';

import GlobalStyle from '../../styles/global';
import { ThemeProvider } from '../../context/ThemeContext';
import Layout from '../Layout';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

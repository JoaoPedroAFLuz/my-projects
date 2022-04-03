import React from 'react';

import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header
          title="Meus Projetos"
          subtitle="Seja bem vindo! Aqui você poderá encontrar informações sobre os meus projetos atuais."
        />
        <Projects />
      </ThemeProvider>
    </>
  );
}

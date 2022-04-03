import React from 'react';

import Header from './components/Header'
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Header />
      <Projects
        title="Alerta de queimadas"
        description="Este projeto é o tema do meu TCC, nele eu estou desenvolvendo uma
          arquitetura de microserviços orientada a eventos para a emissão de
          alertas sobre queimadas."
      />
    </>
  );
}

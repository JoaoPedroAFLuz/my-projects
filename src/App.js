import React from 'react';

import Header from './components/Header';
import Projects from './components/Projects';

const projects = [
  {
    title: 'Alerta de queimadas.',
    description: 'Este projeto é o tema do meu TCC, nele eu estou desenvolvendo uma arquitetura de microserviços orientada a eventos para a emissão de alertas sobre queimadas.',
    link: 'https://github.com/JoaoPedroLuz57/alertas-de-queimadas',
    status: 'Em desenvolvimento'
  },
  {
    title: 'App de restaurante.',
    description: 'App, utilizando spring boot e ionic, de um restaurante onde é possível visualizar o menu e realizar pedidos para receber em casa.',
    link: '',
    status: 'A fazer'

  }
];

export default function App() {
  return (
    <>
      <Header />

      {projects.map(project => (
        <Projects 
          key={project.title}
          title={project.title} 
          description={project.description} 
          link={project.link}
          status={project.status}
        />
      ))}
    </>
  );
}

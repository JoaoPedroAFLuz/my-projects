import React from 'react';
import { useState } from 'react/cjs/react.development';

import Header from './components/Header';
import Projects from './components/Projects';

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: Math.random(),
      title: 'Alerta de queimadas.',
      description:
        'Este projeto é o tema do meu TCC, nele eu estou desenvolvendo uma arquitetura de microserviços orientada a eventos para a emissão de alertas sobre queimadas.',
      link: 'https://github.com/JoaoPedroLuz57/alertas-de-queimadas',
      status: 'Em desenvolvimento',
      likes: 0,
    },
    {
      id: Math.random(),
      title: 'App de restaurante.',
      description:
        'App, utilizando spring boot e ionic, de um restaurante onde é possível visualizar o menu e realizar pedidos para receber em casa.',
      link: '',
      status: 'A fazer',
      likes: 0,
    },
  ]);

  function handleLike(projectId) {
    setProjects(prevState =>
      prevState.map(project =>
        (project.id === projectId ? {...project, likes: project.likes + 1} : project)
      )
    );
  }

  return (
    <>
      <Header />

      {projects.map(project => (
        <Projects
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          status={project.status}
          likes={project.likes}
          onLike={handleLike}
        />
      ))}
    </>
  );
}

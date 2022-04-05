import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Routes } from '../../Routes';
import { Nav } from './styles'

export default function Layout() {
  return (
    <BrowserRouter>
      <Header title="Meus Projetos" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

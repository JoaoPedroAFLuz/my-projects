import React from 'react';

import { Header } from '../Header';
import { Projects } from '../Projects';
import { Footer } from '../Footer';

export default function Layout() {
  return (
    <>
      <Header title="Meus Projetos" />
      <Projects />
      <Footer />
    </>
  );
}

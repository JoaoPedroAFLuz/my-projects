import React from 'react';

import { ProjectHeader } from './ProjectHeader';
import { Button } from '../../../components/Button';
import { Container } from './styles';

export function Project({
  project: { id, title, description, link, status, likes },
  onLike,
}) {
  return (
    <Container status={status}>
      <ProjectHeader
        title={title}
        description={description}
        link={link}
        status={status}
        likes={likes}
      />
      {status !== 'A fazer' && (
        <Button onClick={() => onLike(id)}>Curtir</Button>
      )}
    </Container>
  );
}

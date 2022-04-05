import React from 'react';

import { Title, Description, Link, Likes, Status } from './styles.js';
export function ProjectHeader({ title, description, link, status, likes }) {
  return (
    <>
      <Title>{title + ':'}</Title>
      <Description>{description}</Description>
      {link ? (
        <Link href={link} target="_blank">
          Repositório no GitHub
        </Link>
      ) : (
        <Status>{status}</Status>
      )}
      <Likes>Curtidas: {likes} </Likes>
    </>
  );
}

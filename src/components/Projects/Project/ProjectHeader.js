import React from 'react';
import PropTypes from 'prop-types';

import { Title, Description, Link, Likes, Status } from './styles.js';
export function ProjectHeader({ title, description, link, status, likes }) {
  return (
    <>
      <Title>{title + ':'}</Title>
      <Description>{description}</Description>
      {link ? (
        <Link href={link} target="_blank">Repositório no GitHub</Link>
      ) : (
        <Status>{status}</Status>
      )}
      <br />
      <Likes>Curtidas: {likes} </Likes>
    </>
  );
}

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

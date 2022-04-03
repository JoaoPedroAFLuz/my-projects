import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectHeader({ title, description, link, status, likes }) {
  return (
    <>
      <strong>{title + ':'}</strong>
      <br />
      <small>{description}</small>s
      <br />
      {link ? (
        <a href={link}>Repositório no GitHub</a>
      ) : (
        <strong>{status}</strong>
      )}
      <br />
      <small>Curtidas: {likes} </small>
    </>
  );
}

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

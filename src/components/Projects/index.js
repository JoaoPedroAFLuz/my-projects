import React from 'react';

import PropTypes from 'prop-types';
export default function Projects({ title, description, link, status, likes }) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{description}</small>
        <br />
        {link ? (
          <a href={link}>Repositório no GitHub</a>
        ) : (
          <strong>{status}</strong>
        )}
      </article>
      <br />
    </>
  );
}

Projects.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

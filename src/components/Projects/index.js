import React from 'react';

import PropTypes from 'prop-types';
export default function Projects({ id, title, description, link, status, likes, onLike }) {
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
        <br />
        <small>Curtidas: {likes}  </small>
        <button onClick={() => onLike(id)}>Curtir</button>
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
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired
};

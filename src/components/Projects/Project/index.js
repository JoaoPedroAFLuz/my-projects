import React from 'react';

import PropTypes from 'prop-types';

import ProjectHeader from './ProjectHeader';
import Button from '../../Button';

export default function Project({
  project: { id, title, description, link, status, likes },
  onLike,
}) {
  return (
    <>
      <article>
        <ProjectHeader
          title={title}
          description={description}
          link={link}
          status={status}
          likes={likes}
        />
        <Button onClick={() => onLike(id)}>Curtir</Button>
      </article>
      <br />
    </>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,

  onLike: PropTypes.func.isRequired,
};

import React from 'react';

export default function Projects({title, description}) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>
          {description}
          
        </small>
      </article>
      <br />
    </>
  );
}

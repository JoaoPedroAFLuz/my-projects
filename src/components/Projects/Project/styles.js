import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  opacity: ${({ status }) => (status === 'A fazer' ? 0.5 : 1)};
`;

export const Title = styled.strong``;

export const Description = styled.span`
  display: block;
  color: #ccc;
`;

export const Link = styled.a`
  color: #6f74ed;
  text-decoration: none;

  &:visited {
    color: #6f74ed;
  }

  &:hover {
    color: #2a31f5;
  }
`;

export const Likes = styled.small`
  color: #ccc;
`;

export const Status = styled.strong`
  color: #ff5452;
`;

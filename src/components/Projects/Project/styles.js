import styled from 'styled-components';

export const Container = styled.article`
  background: ${({theme}) => theme.projectBackgroundColor};
  color: ${({theme}) => theme.textColor};
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  h2 {
    margin: 0 0 8px;
  }
  small {
    opacity: 0.7;
  }
  & + article {
    margin-top: 8px;
  }

  opacity: ${({ status }) => (status === 'A fazer' ? 0.5 : 1)};
`;

export const Title = styled.strong``;

export const Description = styled.span`
  display: block;
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
`;

export const Status = styled.strong`
  color: #ff5452;
`;

import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background: ${({theme}) => theme.footerBackgroudColor};
  color: ${({theme}) => theme.textColor};
  width: fit-content;
`;

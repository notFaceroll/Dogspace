import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
`;

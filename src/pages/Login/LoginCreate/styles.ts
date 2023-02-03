import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  to {
  opacity: 1;
  transform: initial;
}`

export const Container = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${slideRight} .3s forwards;
`;

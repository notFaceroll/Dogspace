import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export const Container = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${slideRight} .3s forwards;

  h1 {
    font-family: ${({theme}) => theme.fonts.secondary};
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    font-weight: 700;
    z-index: 1;

    &::after {
      content: '';
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      background-color: #fb1;
      position: absolute;
      bottom: 5px;
      left: -5px;
      border-radius: .2rem;
      z-index: -1;
    }
  }
`;

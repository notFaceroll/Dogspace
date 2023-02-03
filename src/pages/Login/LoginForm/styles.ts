import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

  form {
    margin-bottom: 2rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
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

export const FormTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
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
}`

export const SignUpContainer = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background-color: #ddd;
      height: .5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }

  p {
    margin-block: 2rem;
  }
`

export const RecoverPasswordLink = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    display: block;
  }
`

export const StyledLink = styled(Link)`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  transition: all .15s ease-in-out;
  min-width: 8rem;

  &:is(:focus, :hover) {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`

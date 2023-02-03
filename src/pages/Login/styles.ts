import styled from 'styled-components';
import loginBackground from '../../assets/login.jpg'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url(${loginBackground}) no-repeat center center;
    background: url('https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80') no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
  }

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }

    .forms {
      max-width: 100%;
    }
  }
`;

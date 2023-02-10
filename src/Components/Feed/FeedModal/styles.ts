import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  display: flex;
  z-index: 1000;
  // to avoid the scrollbar on the right side
  // padding: 2rem calc(4rem + 15px) 2rem 4rem;
  padding: 2rem 4rem;

  @media screen and (max-width: 40rem) {
    padding: 2rem;
  }
`;

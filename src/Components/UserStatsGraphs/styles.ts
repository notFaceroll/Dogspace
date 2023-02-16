import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  .total {
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;
  }

  .item {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
    border-radius: .2rem;
    display: grid;
    align-items: center;
  }

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;

    .total {
      grid-column: 1;
    }
  }
`;

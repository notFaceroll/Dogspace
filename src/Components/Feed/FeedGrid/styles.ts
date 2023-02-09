import styled from 'styled-components';

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PhotoItem = styled.li`

`;

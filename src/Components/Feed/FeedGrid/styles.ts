import styled from 'styled-components';

import viewCount from '../../../assets/visualizacao.svg';

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media screen and (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoItem = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:hover span {
    display: flex;
  }

  &>div {
    grid-area: 1 / 1;
  }

  span {
    grid-area: 1 / 1;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: .25rem;
      background: url(${viewCount}) no-repeat;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media screen and (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

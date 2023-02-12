import styled, { keyframes } from 'styled-components';
import viewIcon from '../../assets/visualizacao-black.svg';

const scaleUp = keyframes`
  to {
    opacity: initial;
    scale: initial;
  }
`

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: .2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;

  opacity: 0;
  scale: .8;
  animation: ${scaleUp} .3s forwards;

  a:hover {
    text-decoration: underline;
  }

  a:is(:visited, :link, :focus, :active) {
    color: #131313;
  }

  .views::before {
    content: '';
    width: 16px;
    height: 10px;
    margin-right: .5rem;
    background: url(${viewIcon}) no-repeat;
    display: inline-block;
  }

  .author {
    opacity: .5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .details {
    padding: 2rem 2rem 0 2rem
  }

  .img {
    grid-row: 1 / 4;
  }

  .comments {
    padding: 0 2rem;
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;

      &::before {
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: .5rem;
        margin-top: 5px;
        position: relative;
        top: 3px;
        width: 2px;
        background-color: #333;
      }
    }
  }


  @media screen and (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    .img {
      grid-row: 1;
    }
  }
`;

export const PhotoDeleteButton = styled.button`
  background-color: #ddd;
  padding: .3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: .875rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  border-radius: .4rem;
  transition: .1s;

  &:is(:hover, :focus) {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`

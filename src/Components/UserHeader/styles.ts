import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  margin-top: 1rem;
`

export const NavContainer = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  a, button {
    background-color: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: .1s;
    cursor: pointer;

    &:is(:hover, :focus) {
      background-color: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }

    &.active {
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
    }

    &.active svg > * {
      fill: #fb1;
    }
  }
`;
